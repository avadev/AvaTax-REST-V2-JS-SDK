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
import { FilingReturnModel } from "./FilingReturnModel";
import { FilingsCheckupSuggestedFormModel } from "./FilingsCheckupSuggestedFormModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Regions
 * @export
 * @class FilingRegionModel
 */
 @JsonObject("FilingRegionModel")
 export class FilingRegionModel {
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("filingId", Number, true)
   filingId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRegionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRegionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("salesAmount", Number, true)
   salesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("taxDueAmount", Number, true)
   taxDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("collectAmount", Number, true)
   collectAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("totalRemittanceAmount", Number, true)
   totalRemittanceAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("consumerUseTaxAmount", Number, true)
   consumerUseTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("consumerUseNonTaxableAmount", Number, true)
   consumerUseNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("consumerUseTaxableAmount", Number, true)
   consumerUseTaxableAmount?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   @JsonProperty("approveDate", DateConverter, true)
   approveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FilingRegionModel
     */
   @JsonProperty("hasNexus", Boolean, true)
   hasNexus?: boolean | undefined = undefined;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingRegionModel
     */
   @JsonProperty("status", Enums.FilingStatusIdConverter, true)
   status?: Enums.FilingStatusId | undefined = undefined;
    /**
     * @type {FilingReturnModel[]}
     * @memberof FilingRegionModel
     */
   @JsonProperty("returns", [FilingReturnModel], true)
   returns?: FilingReturnModel[] | undefined = undefined;
    /**
     * @type {FilingsCheckupSuggestedFormModel[]}
     * @memberof FilingRegionModel
     */
   @JsonProperty("suggestReturns", [FilingsCheckupSuggestedFormModel], true)
   suggestReturns?: FilingsCheckupSuggestedFormModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }