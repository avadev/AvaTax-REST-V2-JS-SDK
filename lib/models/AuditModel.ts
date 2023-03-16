/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { AuditEvent } from "./AuditEvent";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Provides detailed information about an API call.
            
The information on this record was captured by AvaTax when your API call was made.  If you are unsure why you
received an error, you can fetch these audit objects and examine the `RequestUrl`, `RequestBody`, and `ErrorMessage`
fields to determine root cause for the error.
 * @export
 * @class AuditModel
 */
 @JsonObject("AuditModel")
 export class AuditModel {
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("transactionId", Number, true)
   transactionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("userId", Number, true)
   userId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("ipAddress", String, true)
   ipAddress?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("machineName", String, true)
   machineName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("clientName", String, true)
   clientName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("clientVersion", String, true)
   clientVersion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("adapterName", String, true)
   adapterName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("adapterVersion", String, true)
   adapterVersion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("serverName", String, true)
   serverName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("serverVersion", String, true)
   serverVersion?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("referenceId", Number, true)
   referenceId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("severityLevelId", Number, true)
   severityLevelId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditModel
     */
   @JsonProperty("serverTimestamp", DateConverter, true)
   serverTimestamp?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("serverDuration", Number, true)
   serverDuration?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("serviceName", String, true)
   serviceName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("operation", String, true)
   operation?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("referenceCode", String, true)
   referenceCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("errorMessage", String, true)
   errorMessage?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("auditMessage", String, true)
   auditMessage?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("loadBalancerDuration", Number, true)
   loadBalancerDuration?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("recordCount", Number, true)
   recordCount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("referenceAuthorization", String, true)
   referenceAuthorization?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AuditModel
     */
   @JsonProperty("isQueued", Boolean, true)
   isQueued?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("databaseCallCount", Number, true)
   databaseCallCount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("databaseCallDuration", String, true)
   databaseCallDuration?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("remoteCallDuration", String, true)
   remoteCallDuration?: string | undefined = undefined;
    /**
     * @type {AuditEvent[]}
     * @memberof AuditModel
     */
   @JsonProperty("events", [AuditEvent], true)
   events?: AuditEvent[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("requestUrl", String, true)
   requestUrl?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("requestBody", String, true)
   requestBody?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   @JsonProperty("responseStatus", Number, true)
   responseStatus?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   @JsonProperty("responseBody", String, true)
   responseBody?: string | undefined = undefined;
    /**
     * @type {AuditModel[]}
     * @memberof AuditModel
     */
   @JsonProperty("remoteCalls", [AuditModel], true)
   remoteCalls?: AuditModel[] | undefined = undefined;
 }