export const accountsPath = 'accounts'

export const accountsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const accountsClient = (client) => {
  const connection = client.get('connection')

  client.use(accountsPath, connection.service(accountsPath), {
    methods: accountsMethods
  })
}
