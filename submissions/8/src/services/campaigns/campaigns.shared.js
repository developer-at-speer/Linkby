export const campaignsPath = 'campaigns'

export const campaignsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const campaignsClient = (client) => {
  const connection = client.get('connection')

  client.use(campaignsPath, connection.service(campaignsPath), {
    methods: campaignsMethods
  })
}
