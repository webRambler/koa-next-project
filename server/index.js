const Koa = require('koa')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()
const PORT = 3005

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res)
    // ctx.respond = false
  })

  server.listen(PORT, () => {
    console.log('app started at port ', PORT)
  })
})