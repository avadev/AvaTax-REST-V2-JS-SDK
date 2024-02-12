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
 * Represents TaxTypeMapping Model
 * @export
 * @class TaxTypeMappingModel
 */
 @JsonObject("TaxTypeMappingModel")
 export class TaxTypeMappingModel {
    /**
     * @type {number}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxTypeMappingId", Number, true)
   taxTypeMappingId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxTypeGroupIdSK", Number, true)
   taxTypeGroupIdSK?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxTypeIdSK", Number, true)
   taxTypeIdSK?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxSubTypeIdSK", Number, true)
   taxSubTypeIdSK?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("generalOrStandardRateTypeIdSK", Number, true)
   generalOrStandardRateTypeIdSK?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxTypeGroupId", String, true)
   taxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("taxSubTypeId", String, true)
   taxSubTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxTypeMappingModel
     */
   @JsonProperty("generalOrStandardRateTypeId", String, true)
   generalOrStandardRateTypeId?: string | undefined = undefined;
 }