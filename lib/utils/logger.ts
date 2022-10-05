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
    logRequestAndResponseInfo?: boolean;
    logger?: BaseLogger;
  }

export default class Logger implements BaseLogger {
    private logEnabled: boolean;
    private logLevel: LogLevel;
    private logger: BaseLogger;
    public logRequestAndResponseInfo: boolean;
    
    constructor({ logEnabled, logLevel, logRequestAndResponseInfo, logger }: LogOptions) {
        this.logEnabled = logEnabled;
        this.logLevel = logLevel;
        this.logRequestAndResponseInfo = logRequestAndResponseInfo;
        if (logger) {
            if (this.isValidCustomLogger(logger)) {
                this.logger = logger;
            } else {
                this.error(`Invalid custom logger was passed in via the AvaTaxClient constructor. Make sure it implements the BaseLogger (./utils/logger) interface properly`);
            }   
        }
    }

    public debug(message: string): void {
        if (this.logLevel >= LogLevel.Debug && this.logEnabled) {
            this.logger ? this.logger.debug(message) : console.debug(message);
        }
    }

    public info(message: string): void {
        if (this.logLevel >= LogLevel.Info && this.logEnabled) {
            this.logger ? this.logger.info(message) : console.info(message);
        }
    }

    public warn(message: string): void {
        if (this.logLevel >= LogLevel.Warn && this.logEnabled) {
            this.logger ? this.logger.warn(message) : console.warn(message);
        }
    }

    public error(message: string): void {
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
}