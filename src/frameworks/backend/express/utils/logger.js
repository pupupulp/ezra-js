const dayjs = require('dayjs');
const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const today = dayjs().format('YYYYMMDD');
const logFormat = printf(({ level, message, label, timestamp }) => {
    return `[${timestamp}] [${label}] [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'SERVER' }),
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: `${appRoot}/logs/${today}/log.txt`,
            level: 'info'
        }),
        new transports.File({
            filename: `${appRoot}/logs/${today}/output.txt`,
            level: 'verbose'
        }),
        new transports.File({
            filename: `${appRoot}/logs/${today}/error.txt`,
            level: 'error'
        }),
    ]
});

module.exports = logger;