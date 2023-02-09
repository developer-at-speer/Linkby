// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { ClicksService, getOptions } from './clicks.class.js'
import { clicksPath, clicksMethods } from './clicks.shared.js'

export * from './clicks.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const clicks = (app) => {
  // Register our service on the Feathers application
  app.use(clicksPath, new ClicksService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: clicksMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(clicksPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
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
