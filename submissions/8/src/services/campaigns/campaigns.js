// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { CampaignsService, getOptions } from './campaigns.class.js'
import { campaignsPath, campaignsMethods } from './campaigns.shared.js'
import { campaignsForbiddenHook } from '../../hooks/campaigns-hook.js'

export * from './campaigns.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const campaigns = (app) => {
  // Register our service on the Feathers application
  app.use(campaignsPath, new CampaignsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: campaignsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(campaignsPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [campaignsForbiddenHook],
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
