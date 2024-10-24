import { transports, format } from "winston";

export function options(scenarioName) {
    return {
        transports: [
            new transports.File({
                filename: `logs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            }),
        ]
    }
};




