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
 * Update model for an existing Connector Data Sync (reverse sync) webhook registration.
            
Only the fields included in the request body will be updated.
 * @export
 * @class ItemReverseSyncRegistrationUpdateModel
 */
 @JsonObject("ItemReverseSyncRegistrationUpdateModel")
 export class ItemReverseSyncRegistrationUpdateModel {
    /**
     * @type {string}
     * @memberof ItemReverseSyncRegistrationUpdateModel
     */
   @JsonProperty("url", String, true)
   url?: string | undefined = undefined;
    /**
     * @type {Enums.ItemReverseSyncTypeName}
     * @memberof ItemReverseSyncRegistrationUpdateModel
     */
   @JsonProperty("typeName", Enums.ItemReverseSyncTypeNameConverter, true)
   typeName?: Enums.ItemReverseSyncTypeName | undefined = undefined;
    /**
     * @type {Enums.ItemReverseSyncEventType}
     * @memberof ItemReverseSyncRegistrationUpdateModel
     */
   @JsonProperty("events", Enums.ItemReverseSyncEventTypeConverter, true)
   events?: Enums.ItemReverseSyncEventType | undefined = undefined;
 }