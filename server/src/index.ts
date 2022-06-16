import config from "./config";
import { ServerApp } from "./server";

const PORT = parseInt(config.port || '8080')

export const server = new ServerApp()
export const app = server.getApp()

server.start(PORT)

