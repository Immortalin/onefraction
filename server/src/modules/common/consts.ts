import { get } from 'config'

export const PORT: number = get('PORT')
export const MONGO_HOST: string = get('MONGO_HOST')
export const DB_NAME: string = get('DB_NAME')
export const ACCOUNTS_SECRET: string = get('ACCOUNTS_SECRET')
export const PLAID_CLIENT_ID: string = get('PLAID_CLIENT_ID')
export const PLAID_SECRET: string = get('PLAID_SECRET')
export const PLAID_PUBLIC_KEY: string = get('PLAID_PUBLIC_KEY')
export const PLAID_PRODUCTS: string = get('PLAID_PRODUCTS')
export const PLAID_COUNTRY_CODES: string = get('PLAID_COUNTRY_CODES')
export const PLAID_ENV: string = get('PLAID_ENV')
