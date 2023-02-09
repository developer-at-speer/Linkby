// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { AccountsService, getOptions } from './accounts.class.js'
import { accountsPath, accountsMethods } from './accounts.shared.js'
import { accountsFind } from '../../hooks/accounts-hook.js'

export * from './accounts.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const accounts = (app) => {
  // Register our service on the Feathers application
  app.use(accountsPath, new AccountsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: accountsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(accountsPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [accountsFind],
      get: [],
      create: [],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
