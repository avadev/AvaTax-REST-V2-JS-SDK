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
 * Represents a tax type group
 * @export
 * @class TaxTypeGroupModel
 */
 @JsonObject("TaxTypeGroupModel")
 export class TaxTypeGroupModel {
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("subscriptionTypeId", Number, true)
   subscriptionTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("subscriptionDescription", String, true)
   subscriptionDescription?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("tabName", String, true)
   tabName?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("showColumn", Boolean, true)
   showColumn?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   @JsonProperty("displaySequence", Number, true)
   displaySequence?: number | undefined = undefined;
 }