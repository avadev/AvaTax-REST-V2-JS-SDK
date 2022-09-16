import { randomUUID } from 'crypto';

export interface BaseLogger {
    // Log a debug message
    debug(message: string): void
    // Log an info message
    info(message: string, guid?: string): void
    // Log a warn message
    warn(message: string): void
    // Log an error message
    error(message: string): void
    // log a message with a given LogLevel
    log(logLevel: LogLevel, message: string): void
}

export enum LogLevel {
    Error = 0,
    Warn = 1,
    Info = 2,
    Debug = 3
}

export interface LogOptions {
    logEnabled: boolean;
    logLevel?: LogLevel;
    logHttpInfo?: boolean;
    logger?: BaseLogger;
  }

export default class Logger implements BaseLogger {
    private logEnabled: boolean;
    private logLevel: LogLevel;
    private logger: BaseLogger;
    public logHttpInfo: boolean;
    
    constructor({ logEnabled, logLevel, logHttpInfo, logger }: LogOptions) {
        this.logEnabled = logEnabled;
        this.logLevel = logLevel;
        this.logHttpInfo = logHttpInfo;
        if (logger) {
            if (this.isValidCustomLogger(logger)) {
                this.logger = logger;
            } else {
                this.error(`Invalid custom logger was passed in via the AvaTaxClient constructor. Make sure it implements the BaseLogger (./utils/logger) interface properly`);
            }   
        }
    }

    public debug(message: string): void {
        message = this.prefixLog(LogLevel.Debug, message);
        if (this.logLevel >= LogLevel.Debug && this.logEnabled) {
            this.logger ? this.logger.debug(message) : console.debug(message);
        }
    }

    public info(message: string): void {
        message = this.prefixLog(LogLevel.Info, message);
        if (this.logLevel >= LogLevel.Info && this.logEnabled) {
            this.logger ? this.logger.info(message) : console.info(message);
        }
    }

    public warn(message: string): void {
        message = this.prefixLog(LogLevel.Warn, message);
        if (this.logLevel >= LogLevel.Warn && this.logEnabled) {
            this.logger ? this.logger.warn(message) : console.warn(message);
        }
    }

    public error(message: string): void {
        message = this.prefixLog(LogLevel.Error, message);
        if (this.logLevel >= LogLevel.Error && this.logEnabled) {
            this.logger ? this.logger.error(message) : console.error(message);
        }
    }

    public log(logLevel: LogLevel, message: string) {
        switch (logLevel) {
            case LogLevel.Debug:
                this.debug(message);
                break;
            case LogLevel.Info:
                this.info(message);
                break;
            case LogLevel.Warn:
                this.warn(message);
                break;
            case LogLevel.Error:
                this.error(message);
                break;
          }
    }

    // Type-guard for custom logger being injected into the SDK configuration.
    private isValidCustomLogger(logger: BaseLogger) {
        return (
            typeof logger.debug === "function" && 
            typeof logger.info === "function" &&
            typeof logger.warn === "function" &&
            typeof logger.error === "function" &&
            typeof logger.log === "function"
        );
    }

    private prefixLog(logLevel: LogLevel, message: string) : string {
        const currentDateTime = new Date();
        // If message is already prefixed, return message as is.
        if (message.indexOf('[Avatax]') >= 0) {
            return message;
        }
        switch (logLevel) {
          case LogLevel.Debug:
            return `[Avatax] | ${currentDateTime} | DEBUG | ${message}`;
          case LogLevel.Info:
            return `[Avatax] | ${currentDateTime} | INFO | ${message}`;
          case LogLevel.Warn:
            return `[Avatax] | ${currentDateTime} | WARN | ${message}`;
          case LogLevel.Error:
            return `[Avatax] | ${currentDateTime} | ERROR | ${message}`;
        }
    }

}

export class RequestLogger implements BaseLogger {
    private requestId: string;
    private logger: Logger;
    constructor(logger: Logger, headers: NodeJS.Dict<string>) {
        if (headers['x-correlation-id']) {
            this.requestId = headers['x-correlation-id'];
        } else {
            this.requestId = headers['x-correlation-id'] = randomUUID();
        }    
        this.logger = logger;
    }

    public debug(message: string): void {
        if (this.logger.logHttpInfo) {
            message = this.prefixLog(LogLevel.Debug, message);
            this.logger.debug(message);
        }
    }

    public info(message: string): void {
        if (this.logger.logHttpInfo) {
            message = this.prefixLog(LogLevel.Info, message);
            this.logger.info(message);
        }
    }

    public warn(message: string): void {
        if (this.logger.logHttpInfo) {
            message = this.prefixLog(LogLevel.Warn, message);
            this.logger.warn(message);
        }
    }

    public error(message: string): void {
        if (this.logger.logHttpInfo) {
            message = this.prefixLog(LogLevel.Error, message);
            this.logger.error(message);
        }
    }

    public log(logLevel: LogLevel, message: string) {
        switch (logLevel) {
            case LogLevel.Debug:
                this.debug(message);
                break;
            case LogLevel.Info:
                this.info(message);
                break;
            case LogLevel.Warn:
                this.warn(message);
                break;
            case LogLevel.Error:
                this.error(message);
                break;
          }
    }

    private prefixLog(logLevel: LogLevel, message: string) : string {
        const currentDateTime = new Date();
        switch (logLevel) {
          case LogLevel.Debug:
            return `[Avatax] | [request-id: ${this.requestId}] | ${currentDateTime} | DEBUG | ${message}`;
          case LogLevel.Info:
            return `[Avatax] | [request-id: ${this.requestId}] | ${currentDateTime} | INFO | ${message}`;
          case LogLevel.Warn:
            return `[Avatax] | [request-id: ${this.requestId}] | ${currentDateTime} | WARN | ${message}`;
          case LogLevel.Error:
            return `[Avatax] | [request-id: ${this.requestId}] | ${currentDateTime} | ERROR | ${message}`;
        }
    }
}