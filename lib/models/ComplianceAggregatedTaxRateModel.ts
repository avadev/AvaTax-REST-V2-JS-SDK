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
 * A model for aggregated rates.
 * @export
 * @class ComplianceAggregatedTaxRateModel
 */
 @JsonObject("ComplianceAggregatedTaxRateModel")
 export class ComplianceAggregatedTaxRateModel {
    /**
     * @type {number}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("stackRate", Number, true)
   stackRate?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceAggregatedTaxRateModel
     */
   @JsonProperty("rateTypeId", String, true)
   rateTypeId?: string | undefined = undefined;
 }