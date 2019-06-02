interface ENV {
  NODE_ENV: string
  GRAPHQL_URL: string
}

function getEnvVars(env = '', envVars: any): ENV {
  if (env.indexOf('development') !== -1) return envVars.dev
  if (env.indexOf('staging') !== -1) return envVars.staging
  if (env.indexOf('prod') !== -1) return envVars.prod
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
