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
 * Represents a Jurisdiction with applicable TaxType, TaxSubType and RateType.
 * @export
 * @class JurisdictionRateTypeTaxTypeMappingModel
 */
 @JsonObject("JurisdictionRateTypeTaxTypeMappingModel")
 export class JurisdictionRateTypeTaxTypeMappingModel {
    /**
     * @type {number}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("jurisdictionType", String, true)
   jurisdictionType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("jurisdictionCode", String, true)
   jurisdictionCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("longName", String, true)
   longName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("taxSubTypeId", String, true)
   taxSubTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("taxTypeGroupId", String, true)
   taxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("rateTypeId", String, true)
   rateTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("stateFips", String, true)
   stateFips?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }