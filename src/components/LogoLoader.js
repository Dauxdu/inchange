const LogoLoader = {}

const req = require.context("../assets/logo/", false, /\.(png|jpe?g|svg)$/)

req.keys().forEach((filename) => {
  const key = filename.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "")
  LogoLoader[key] = req(filename)
})

export default LogoLoader
