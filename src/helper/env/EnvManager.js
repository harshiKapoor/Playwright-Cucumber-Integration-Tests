import dotenv from "dotenv";
import 'dotenv/config'

class EnvManager {

    async getEnv() {

        if (process.env.ENV) {
            dotenv.config({
                override: true,
                path: `features/helper/env/.env.${process.env.ENV}`
            })
        } else {
            console.error("NO ENV PASSED!")
        }

    }
}


export { EnvManager };