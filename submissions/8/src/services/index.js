import { clicks } from './clicks/clicks.js'

import { campaigns } from './campaigns/campaigns.js'

import { accounts } from './accounts/accounts.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(clicks)

  app.configure(campaigns)

  app.configure(accounts)

  app.configure(user)

  // All services will be registered here
}
