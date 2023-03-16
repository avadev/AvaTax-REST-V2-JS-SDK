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
import { FilingsTaxSummaryModel } from "./FilingsTaxSummaryModel";
import { FilingsTaxDetailsModel } from "./FilingsTaxDetailsModel";
import { FilingsCheckupSuggestedFormModel } from "./FilingsCheckupSuggestedFormModel";
import { MultiTaxFilingReturnModel } from "./MultiTaxFilingReturnModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Regions
 * @export
 * @class MultiTaxFilingRegionModel
 */
 @JsonObject("MultiTaxFilingRegionModel")
 export class MultiTaxFilingRegionModel {
    /**
     * @type {string}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("hasNexus", Boolean, true)
   hasNexus?: boolean | undefined = undefined;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("status", Enums.FilingStatusIdConverter, true)
   status?: Enums.FilingStatusId | undefined = undefined;
    /**
     * @type {FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("regionTaxSummary", FilingsTaxSummaryModel, true)
   regionTaxSummary?: FilingsTaxSummaryModel | undefined = undefined;
    /**
     * @type {FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("regionTaxDetails", [FilingsTaxDetailsModel], true)
   regionTaxDetails?: FilingsTaxDetailsModel[] | undefined = undefined;
    /**
     * @type {FilingsCheckupSuggestedFormModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("suggestReturns", [FilingsCheckupSuggestedFormModel], true)
   suggestReturns?: FilingsCheckupSuggestedFormModel[] | undefined = undefined;
    /**
     * @type {MultiTaxFilingReturnModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   @JsonProperty("returns", [MultiTaxFilingReturnModel], true)
   returns?: MultiTaxFilingReturnModel[] | undefined = undefined;
 }