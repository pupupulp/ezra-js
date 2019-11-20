const morgan = require('morgan');
const dayjs = require('dayjs');
const appRoot = require('app-root-path');
const fs = require('fs');

const format = '[:date[iso]] [SERVER] [INFO] [:remote-addr] [:remote-user]: :method :url HTTP/:http-version " :status :res[content-length] ":referrer" ":user-agent"';

module.exports.initializeFileStream = () => {
    const today = dayjs().format('YYYYMMDD');
    
    return morgan(format, { 
        stream: fs.createWriteStream(`${appRoot}/logs/${today}/log.txt`, { flags: 'a' })
    });
}

module.exports.initializeConsoleStream = () => {
    return morgan(format);
};