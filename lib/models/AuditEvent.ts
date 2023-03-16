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
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class AuditEvent
 */
 @JsonObject("AuditEvent")
 export class AuditEvent {
    /**
     * @type {number}
     * @memberof AuditEvent
     */
   @JsonProperty("auditEventId", Number, true)
   auditEventId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditEvent
     */
   @JsonProperty("transactionId", Number, true)
   transactionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditEvent
     */
   @JsonProperty("correlationId", String, true)
   correlationId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditEvent
     */
   @JsonProperty("avalaraUid", String, true)
   avalaraUid?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof AuditEvent
     */
   @JsonProperty("auditEventLevelId", Number, true)
   auditEventLevelId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditEvent
     */
   @JsonProperty("eventTimestamp", DateConverter, true)
   eventTimestamp?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditEvent
     */
   @JsonProperty("source", String, true)
   source?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditEvent
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditEvent
     */
   @JsonProperty("details", String, true)
   details?: string | undefined = undefined;
 }