import * as config from 'config'

export const PORT: number = config.get('PORT')
export const MONGO_HOST: string = config.get('MONGO_HOST')
export const DB_NAME: string = config.get('DB_NAME')
export const ACCOUNTS_SECRET: string = config.get('ACCOUNTS_SECRET')
