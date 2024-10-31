import express, { json } from 'express'

export const createApp = () => {
  const app = express()

  app.disable('x-powered-by')

  app.use(json())

  // implement a jwt auth middleware

  app.get('/', (_req, res) => {
    res.send('Have a nice project development!')
  })

  return app
}
