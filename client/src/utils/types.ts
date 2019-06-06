export enum Environments {
  dev = 'development',
  stag = 'staging',
  prod = 'production',
}

export enum PlaidEnvs {
  sandbox = 'sandbox',
  tartan = 'tartan',
  production = 'production',
}

export enum PlaidCountryCodes {
  US = 'US',
}

export enum PlaidProducts {
  transactions = 'transactions',
  auth = 'auth',
  connect = 'connect',
  info = 'info',
  risk = 'risk',
  income = 'income',
}

export interface PlaidObj {
  open(): void
  exit(opts?: { force: boolean }): void
}

export interface PlaidInstitution {
  name: string
  type: string
}

export interface PlaidAccount {
  id: string
  name: string
}

export interface PlaidMetadata {
  institution?: PlaidInstitution
  account?: PlaidAccount
  account_id?: string
}

export interface PlaidOptions {
  clientName: string
  product: PlaidProducts[]
  key: string
  env: PlaidEnvs
  countryCodes: PlaidCountryCodes[]
  onSuccess: (publicToken: string, metaData: PlaidMetadata) => void
  onExit?: (error: any, metaData: PlaidMetadata) => void
  onLoad?: () => void
  onEvent?: (eventName: string, metaData: PlaidMetadata) => void
  webhook?: string
  token?: string
  language?: string
  selectAccount?: boolean
  isWebview?: boolean
}

export interface PlaidStatic {
  create(opts: PlaidOptions): PlaidObj
  publishableKey: string
}
