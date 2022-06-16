import dotenv from 'dotenv'

dotenv.config()

const config = {
    port: process.env.PORT,
    basePath: "api/v1"
}

export default config