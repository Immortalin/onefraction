import { Environments, PlaidEnvs, PlaidCountryCodes, PlaidProducts } from './types'

interface ENV {
  NODE_ENV: Environments
  GRAPHQL_URL: string
  GOOGLE_MAPS_KEY: string
  PLAID_PUBLIC_KEY: string
  PLAID_PRODUCTS: PlaidProducts
  PLAID_COUNTRY_CODES: PlaidCountryCodes
  PLAID_ENV: PlaidEnvs
}

function getEnvVars(env = '', envVars: any): ENV {
  if (env.indexOf(Environments.dev) !== -1) return envVars.dev
  if (env.indexOf(Environments.stag) !== -1) return envVars.staging
  if (env.indexOf(Environments.prod) !== -1) return envVars.prod
  return envVars.dev
}

const dev = require('../config/development.env.json')
const env = getEnvVars(process.env.NODE_ENV, {
  dev,
  // staging: {
  //
  // },
  // prod: {
  //
  // }
})

export const NODE_ENV = env.NODE_ENV
export const GRAPHQL_URL = env.GRAPHQL_URL
export const GOOGLE_MAPS_KEY = env.GOOGLE_MAPS_KEY
export const PLAID_PUBLIC_KEY = env.PLAID_PUBLIC_KEY
export const PLAID_PRODUCTS = env.PLAID_PRODUCTS
export const PLAID_COUNTRY_CODES = env.PLAID_COUNTRY_CODES
export const PLAID_ENV = env.PLAID_ENV
