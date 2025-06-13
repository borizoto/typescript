"use strict";
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    format;
    cachedLogs = new Map();
    constructor(format) {
        this.format = format;
    }
    log(logLevel, message) {
        const date = new Date().toISOString();
        const formattedMessage = this.format.replace('%level', logLevel).replace('%date', date).replace('%text', message);
        console.log(formattedMessage);
        if (!this.cachedLogs.has(logLevel)) {
            this.cachedLogs.set(logLevel, [formattedMessage]);
        }
        else {
            this.cachedLogs.get(logLevel).push(formattedMessage);
        }
    }
    getFormat() {
        return this.format;
    }
}
// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");
// console.log('-----------')
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));
// console.log(logger.cachedLogs)
let logger = new Logger(LoggingFormat.Minimal);
logger.log(LoggingLevel.Info, "Just a simple message.");
logger.log(LoggingLevel.Error, "A Problem happened.");
console.log('-----------');
console.log(logger.getFormat());
console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));
//# sourceMappingURL=05-04.js.map