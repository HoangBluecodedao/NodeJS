require("dotenv").config() 
const app = require("./src/app")

const env = process.env.NODE_ENV || 'dev'
const PORT = env === 'dev' ? process.env.DEV_APP_PORT : process.env.PRO_APP_PORT
const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT} in ${env} mode`)
})

// process.on("SIGINT", () => {
//   server.close(() => console.log(`Exited server Express`))
// })
