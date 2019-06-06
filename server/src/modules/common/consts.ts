import * as config from 'config'

export const PORT: number = config.get('PORT')
export const MONGO_HOST: string = config.get('MONGO_HOST')
export const DB_NAME: string = config.get('DB_NAME')
export const ACCOUNTS_SECRET: string = config.get('ACCOUNTS_SECRET')
export const PLAID_CLIENT_ID: string = config.get('PLAID_CLIENT_ID')
export const PLAID_SECRET: string = config.get('PLAID_SECRET')
export const PLAID_PUBLIC_KEY: string = config.get('PLAID_PUBLIC_KEY')
export const PLAID_PRODUCTS: string = config.get('PLAID_PRODUCTS')
export const PLAID_COUNTRY_CODES: string = config.get('PLAID_COUNTRY_CODES')
export const PLAID_ENV: string = config.get('PLAID_ENV')
