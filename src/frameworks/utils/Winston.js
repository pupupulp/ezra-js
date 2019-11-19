const { ILoggerService } = demand('interfaces');
const dayjs = require('dayjs');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

module.exports = class Winston extends ILoggerService {

    constructor() {
        super();
        
        this.today = dayjs().format('YYYYMMDD');
        this.format = printf(({ level, message, label, timestamp }) => {
            return `[${timestamp}] [${label}] [${level.toUpperCase()}]: ${message}`;
        });

        this.logger = createLogger({
            format: combine(
                label({ label: 'SERVER' }),
                timestamp(),
                this.format
            ),
            transports: [
                new transports.Console(),
                new transports.File({
                    filename: `logs/${this.today}/log.txt`,
                    level: 'info'
                }),
                new transports.File({
                    filename: `logs/${this.today}/output.txt`,
                    level: 'verbose'
                }),
                new transports.File({
                    filename: `logs/${this.today}/error.txt`,
                    level: 'error'
                }),
            ]
        });
    }

    info(message) {
        return this.logger.info(message);
    }

    error(message) {
        return this.logger.error(message);
    }

    warn(message) {
        return this.logger.warn(message);
    }
};