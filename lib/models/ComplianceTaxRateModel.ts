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
 * The tax rate model.
 * @export
 * @class ComplianceTaxRateModel
 */
 @JsonObject("ComplianceTaxRateModel")
 export class ComplianceTaxRateModel {
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("rateTypeId", String, true)
   rateTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("unitOfBasisId", Number, true)
   unitOfBasisId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   @JsonProperty("rateTypeTaxTypeMappingId", Number, true)
   rateTypeTaxTypeMappingId?: number | undefined = undefined;
 }