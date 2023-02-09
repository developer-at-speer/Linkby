export const clicksPath = 'clicks'

export const clicksMethods = ['find', 'get', 'create', 'patch', 'remove']

export const clicksClient = (client) => {
  const connection = client.get('connection')

  client.use(clicksPath, connection.service(clicksPath), {
    methods: clicksMethods
  })
}
