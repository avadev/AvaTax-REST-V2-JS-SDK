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
 * Represents a single notification.
            
A notification is a message from Avalara that may have relevance to your business.  You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
            
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.
 * @export
 * @class NotificationModel
 */
 @JsonObject("NotificationModel")
 export class NotificationModel {
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("referenceObject", String, true)
   referenceObject?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("referenceId", Number, true)
   referenceId?: number | undefined = undefined;
    /**
     * @type {Enums.NotificationSeverityLevel}
     * @memberof NotificationModel
     */
   @JsonProperty("severityLevelId", Enums.NotificationSeverityLevelConverter)
   severityLevelId: Enums.NotificationSeverityLevel = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("topic", String, true)
   topic?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("message", String)
   message: string = undefined;
    /**
     * @type {boolean}
     * @memberof NotificationModel
     */
   @JsonProperty("needsAction", Boolean, true)
   needsAction?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("actionName", String, true)
   actionName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   @JsonProperty("actionLink", String, true)
   actionLink?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   @JsonProperty("actionDueDate", DateConverter, true)
   actionDueDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NotificationModel
     */
   @JsonProperty("dismissed", Boolean, true)
   dismissed?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("dismissedByUserId", Number, true)
   dismissedByUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   @JsonProperty("dismissedDate", DateConverter, true)
   dismissedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   @JsonProperty("expireDate", DateConverter)
   expireDate: Date = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }