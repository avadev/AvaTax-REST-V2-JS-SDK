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
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @class FilingsTaxSummaryModel
 */
 @JsonObject("FilingsTaxSummaryModel")
 export class FilingsTaxSummaryModel {
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("salesAmount", Number, true)
   salesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("remittanceAmount", Number, true)
   remittanceAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("collectAmount", Number, true)
   collectAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("salesAccrualAmount", Number, true)
   salesAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("taxableAccrualAmount", Number, true)
   taxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("nonTaxableAccrualAmount", Number, true)
   nonTaxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("taxAccrualAmount", Number, true)
   taxAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("reportableSalesAmount", Number, true)
   reportableSalesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("reportableNonTaxableAmount", Number, true)
   reportableNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("reportableTaxableAmount", Number, true)
   reportableTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   @JsonProperty("reportableTaxAmount", Number, true)
   reportableTaxAmount?: number | undefined = undefined;
 }