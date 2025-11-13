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
 * Represents a service or a subscription type.
 * @export
 * @class SubscriptionTypeModel
 */
 @JsonObject("SubscriptionTypeModel")
 export class SubscriptionTypeModel {
    /**
     * @type {number}
     * @memberof SubscriptionTypeModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof SubscriptionTypeModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof SubscriptionTypeModel
     */
   @JsonProperty("system", String, true)
   system?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof SubscriptionTypeModel
     */
   @JsonProperty("taxTypeGroupIdSK", Number, true)
   taxTypeGroupIdSK?: number | undefined = undefined;
 }