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
 * Output model representing a Connector Data Sync (reverse sync) webhook registration.
 * @export
 * @class ItemReverseSyncRegistrationOutputModel
 */
 @JsonObject("ItemReverseSyncRegistrationOutputModel")
 export class ItemReverseSyncRegistrationOutputModel {
    /**
     * @type {number}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("registrationId", Number, true)
   registrationId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("connectorName", String, true)
   connectorName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("url", String, true)
   url?: string | undefined = undefined;
    /**
     * @type {Enums.ItemReverseSyncTypeName}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("typeName", Enums.ItemReverseSyncTypeNameConverter, true)
   typeName?: Enums.ItemReverseSyncTypeName | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {Enums.ItemReverseSyncEventType}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("events", Enums.ItemReverseSyncEventTypeConverter, true)
   events?: Enums.ItemReverseSyncEventType | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemReverseSyncRegistrationOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
 }