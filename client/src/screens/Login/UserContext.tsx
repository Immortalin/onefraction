import * as React from 'react'
import { User } from '../../generated/graphql'
import { accountsGraphQL, accountsPassword } from '../../utils/apollo'

interface UserState {
  user?: User
  loggingIn: boolean
}

interface UserContext {
  userState: UserState
  setUserState: (userState: UserState) => void
  getUser: () => void
  signUp: (args: { firstName: string; lastName: string; email: string; password: string }) => void
  logIn: (username: string, password: string) => void
  logOut: () => void
}

const initialState = { user: undefined, loggingIn: true }

export const UserContext = React.createContext<UserContext>({
  userState: initialState,
  setUserState: () => {},
  getUser: () => {},
  signUp: () => {},
  logIn: () => {},
  logOut: () => {},
})

export const UserProvider: React.FunctionComponent<{}> = props => {
  const [userState, setUserState] = React.useState<UserState>(initialState)

  const getUser = async () => {
    let user: any = null

    try {
      user = await accountsGraphQL.getUser()
      console.log('user', user)
    } catch (error) {
      console.error('There was an error logging in.', error)
    } finally {
      setUserState({ user: user && { ...user, _id: user.id }, loggingIn: false })
    }
  }

  const logIn = async (email: string, password: string) => {
    await accountsPassword.login({ password, user: { email } })

    await getUser()
  }

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
        getUser,
        signUp: async (args: {
          firstName: string
          lastName: string
          email: string
          password: string
        }) => {
          const { firstName, lastName, email, password } = args
          await accountsPassword.createUser({
            password,
            email,
            profile: { firstName, lastName }, // TODO
          })

          await logIn(email, password)
        },
        logIn,
        logOut: async () => {
          await accountsGraphQL.logout()

          setUserState({ user: undefined, loggingIn: false })
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => React.useContext(UserContext)
