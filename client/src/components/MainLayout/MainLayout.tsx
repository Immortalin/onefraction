import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
// import { useMeQuery } from '../../generated/graphql'
import Sidebar from './Sidebar'
import MenuIcon from './MenuIcon'

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
  background: var(--light-grayish-blue);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
`

interface MainLayoutProps {
  children: JSX.Element
}

export const SidebarContext = React.createContext({ sidebarOpen: false })

const MainLayout = ({ children }: MainLayoutProps) => {
  // const { data } = useMeQuery()

  // const [sidebarOpen, setSidebarOpen] = React.useState(!!(data && data.me && data.me.isOnboarded))
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ sidebarOpen }}>
      <Wrapper>
        <Sidebar open={sidebarOpen} />
        <MenuIcon onPress={() => setSidebarOpen(!sidebarOpen)} />
        {children}
      </Wrapper>
    </SidebarContext.Provider>
  )
}

export default MainLayout
