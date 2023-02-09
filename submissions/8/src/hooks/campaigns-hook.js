import { Forbidden } from "@feathersjs/errors"

export const campaignsForbiddenHook = async (context) => {
  if (context.arguments[0] === '10') {
    throw new Forbidden('You are not allowed to access.')
  }
  console.log(`Running hook campaigns on ${context.path}.${context.method}`)
}
