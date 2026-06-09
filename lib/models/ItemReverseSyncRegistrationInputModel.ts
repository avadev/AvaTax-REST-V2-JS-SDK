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
 * Input model used to create a Connector Data Sync (reverse sync) webhook registration.
            
A registration tells Avalara which connector should be notified when an item-related
event occurs (currently `HSCodeAssigned`), the callback URL to invoke, and the
events the connector wishes to subscribe to.
 * @export
 * @class ItemReverseSyncRegistrationInputModel
 */
 @JsonObject("ItemReverseSyncRegistrationInputModel")
 export class ItemReverseSyncRegistrationInputModel {
    /**
     * @type {string}
     * @memberof ItemReverseSyncRegistrationInputModel
     */
   @JsonProperty("connectorName", String)
   connectorName: string = undefined;
    /**
     * @type {string}
     * @memberof ItemReverseSyncRegistrationInputModel
     */
   @JsonProperty("url", String)
   url: string = undefined;
    /**
     * @type {Enums.ItemReverseSyncTypeName}
     * @memberof ItemReverseSyncRegistrationInputModel
     */
   @JsonProperty("typeName", Enums.ItemReverseSyncTypeNameConverter)
   typeName: Enums.ItemReverseSyncTypeName = undefined;
    /**
     * @type {Enums.ItemReverseSyncEventType}
     * @memberof ItemReverseSyncRegistrationInputModel
     */
   @JsonProperty("events", Enums.ItemReverseSyncEventTypeConverter)
   events: Enums.ItemReverseSyncEventType = undefined;
 }