import { AvalaraError, HttpOptions } from "../AvaTaxClient";
import { Response, Headers } from "node-fetch";
 
export default class LogObject {
  private logRequestAndResponseInfo: boolean = false;
  private httpMethod: string;
  private correlationId: string;
  private requestDetails: string;
  private responseDetails: string;
  private requestURI: string;
  private totalExecutionTime: number;
  private statusCode: number;
  private timestamp: string;
  private errorInfo: AvalaraError;
  private startTime: number;

  constructor(logRequestAndResponseInfo: boolean) {
    this.logRequestAndResponseInfo = logRequestAndResponseInfo;
  }

  public populateRequestInfo(uri: string, options: HttpOptions, payload: any) {
    this.timestamp = new Date().toUTCString();
    this.startTime = Date.now();
    this.httpMethod = options.method;
    this.requestURI = uri;
    if (payload && this.logRequestAndResponseInfo) {
      this.requestDetails = payload;
    }
  }

  public populateResponseInfo(response: Response, json: any) {
    this.populateCorrelationId(response.headers);
    this.populateStatusCode(response);
    if (json && this.logRequestAndResponseInfo) {
      this.responseDetails = json;
    }
  }

  public populateErrorInfo(response: Response, errorInfo: AvalaraError) {
    this.populateCorrelationId(response.headers);
    this.populateStatusCode(response);
    if (errorInfo) {
      this.errorInfo = errorInfo;
    }
  }

  public populateElapsedTime() {
    this.totalExecutionTime = Date.now() - this.startTime;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public toString(): string {
    const { 
      httpMethod, correlationId, requestDetails, responseDetails, requestURI, 
      totalExecutionTime, statusCode, timestamp, errorInfo 
    } = this;
    return JSON.stringify({
      httpMethod,
      correlationId,
      requestDetails,
      responseDetails,
      requestURI,
      totalExecutionTime,
      statusCode,
      timestamp, 
      errorInfo
    });
  }

  private populateStatusCode(response: Response) {
    this.statusCode = response.status;
  }

  private populateCorrelationId(headers: Headers) {
    if(headers.get('x-correlation-id')) {
      this.correlationId = headers.get('x-correlation-id');
    }
  }
}