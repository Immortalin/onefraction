import gql from 'graphql-tag'
import * as ReactApollo from 'react-apollo'
import * as ReactApolloHooks from 'react-apollo-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type AuthenticateParamsInput = {
  access_token?: Maybe<Scalars['String']>
  access_token_secret?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  user?: Maybe<UserInput>
  code?: Maybe<Scalars['String']>
}

export type CreateUserInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  profile: ProfileInput
}

export type EmailRecord = {
  __typename?: 'EmailRecord'
  address?: Maybe<Scalars['String']>
  verified?: Maybe<Scalars['Boolean']>
}

export type ImpersonateReturn = {
  __typename?: 'ImpersonateReturn'
  authorized?: Maybe<Scalars['Boolean']>
  tokens?: Maybe<Tokens>
  user?: Maybe<User>
}

export type LoginResult = {
  __typename?: 'LoginResult'
  sessionId?: Maybe<Scalars['String']>
  tokens?: Maybe<Tokens>
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser?: Maybe<Scalars['ID']>
  verifyEmail?: Maybe<Scalars['Boolean']>
  resetPassword?: Maybe<LoginResult>
  sendVerificationEmail?: Maybe<Scalars['Boolean']>
  sendResetPasswordEmail?: Maybe<Scalars['Boolean']>
  changePassword?: Maybe<Scalars['Boolean']>
  twoFactorSet?: Maybe<Scalars['Boolean']>
  twoFactorUnset?: Maybe<Scalars['Boolean']>
  impersonate?: Maybe<ImpersonateReturn>
  refreshTokens?: Maybe<LoginResult>
  logout?: Maybe<Scalars['Boolean']>
  authenticate?: Maybe<LoginResult>
  onboardUser: Scalars['Boolean']
  setPlaidToken: Scalars['Boolean']
}

export type MutationCreateUserArgs = {
  user: CreateUserInput
}

export type MutationVerifyEmailArgs = {
  token: Scalars['String']
}

export type MutationResetPasswordArgs = {
  token: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationSendVerificationEmailArgs = {
  email: Scalars['String']
}

export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']
}

export type MutationChangePasswordArgs = {
  oldPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationTwoFactorSetArgs = {
  secret: TwoFactorSecretKeyInput
  code: Scalars['String']
}

export type MutationTwoFactorUnsetArgs = {
  code: Scalars['String']
}

export type MutationImpersonateArgs = {
  accessToken: Scalars['String']
  username: Scalars['String']
}

export type MutationRefreshTokensArgs = {
  accessToken: Scalars['String']
  refreshToken: Scalars['String']
}

export type MutationAuthenticateArgs = {
  serviceName: Scalars['String']
  params: AuthenticateParamsInput
}

export type MutationOnboardUserArgs = {
  property: PropertyInput
  publicToken: Scalars['String']
}

export type MutationSetPlaidTokenArgs = {
  publicToken: Scalars['String']
}

export type Plaid = {
  __typename?: 'Plaid'
  accessToken: Scalars['String']
  itemId: Scalars['String']
}

export type Profile = {
  __typename?: 'Profile'
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type ProfileInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type Property = {
  __typename?: 'Property'
  address: Scalars['String']
  placeId: Scalars['String']
  rentAmount: Scalars['Float']
}

export type PropertyInput = {
  address: Scalars['String']
  placeId: Scalars['String']
  rentAmount: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  twoFactorSecret?: Maybe<TwoFactorSecretKey>
  getUser?: Maybe<User>
  me: User
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
}

export type Tokens = {
  __typename?: 'Tokens'
  refreshToken?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
}

export type TwoFactorSecretKey = {
  __typename?: 'TwoFactorSecretKey'
  ascii?: Maybe<Scalars['String']>
  base32?: Maybe<Scalars['String']>
  hex?: Maybe<Scalars['String']>
  qr_code_ascii?: Maybe<Scalars['String']>
  qr_code_hex?: Maybe<Scalars['String']>
  qr_code_base32?: Maybe<Scalars['String']>
  google_auth_qr?: Maybe<Scalars['String']>
  otpauth_url?: Maybe<Scalars['String']>
}

export type TwoFactorSecretKeyInput = {
  ascii?: Maybe<Scalars['String']>
  base32?: Maybe<Scalars['String']>
  hex?: Maybe<Scalars['String']>
  qr_code_ascii?: Maybe<Scalars['String']>
  qr_code_hex?: Maybe<Scalars['String']>
  qr_code_base32?: Maybe<Scalars['String']>
  google_auth_qr?: Maybe<Scalars['String']>
  otpauth_url?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  emails?: Maybe<Array<EmailRecord>>
  username?: Maybe<Scalars['String']>
  _id: Scalars['ID']
  profile: Profile
  plaid?: Maybe<Plaid>
  properties?: Maybe<Array<Property>>
  roles: Array<Role>
  isOnboarded?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type UserInput = {
  id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}
export type OnboardUserMutationVariables = {
  publicToken: Scalars['String']
  property: PropertyInput
}

export type OnboardUserMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'onboardUser'>

export type MeQueryVariables = {}

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, '_id' | 'isOnboarded'> & {
      profile: { __typename?: 'Profile' } & Pick<Profile, 'firstName' | 'lastName'>
      emails: Maybe<Array<{ __typename?: 'EmailRecord' } & Pick<EmailRecord, 'address'>>>
    }
}

export const OnboardUserDocument = gql`
  mutation OnboardUser($publicToken: String!, $property: PropertyInput!) {
    onboardUser(publicToken: $publicToken, property: $property)
  }
`
export type OnboardUserMutationFn = ReactApollo.MutationFn<
  OnboardUserMutation,
  OnboardUserMutationVariables
>

export function useOnboardUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    OnboardUserMutation,
    OnboardUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<OnboardUserMutation, OnboardUserMutationVariables>(
    OnboardUserDocument,
    baseOptions
  )
}
export const MeDocument = gql`
  query Me {
    me {
      _id
      profile {
        firstName
        lastName
      }
      emails {
        address
      }
      isOnboarded
    }
  }
`

export function useMeQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryVariables>) {
  return ReactApolloHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
