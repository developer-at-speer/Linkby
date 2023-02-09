export const accountsFind = async (context) => {
  context.params.query['active'] = true;
}
