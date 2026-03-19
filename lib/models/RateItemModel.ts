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
 * Represents a single tax rate item
 * @export
 * @class RateItemModel
 */
 @JsonObject("RateItemModel")
 export class RateItemModel {
    /**
     * @type {number}
     * @memberof RateItemModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("displayName", String, true)
   displayName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("jurisdictionTypeId", String, true)
   jurisdictionTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("rateTypeId", String, true)
   rateTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("taxTypeGroupId", String, true)
   taxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof RateItemModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
 }