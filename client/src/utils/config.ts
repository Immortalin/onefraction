interface Config {
  app: {
    name: string
  }
  os: {
    ios: string
    android: string
    web: string
  }
  web: {
    root: string
  }
}

export const Config: Config = {
  app: {
    name: 'FullStack',
  },
  os: {
    android: 'android',
    ios: 'ios',
    web: 'web',
  },
  web: {
    root: 'root',
  },
}
