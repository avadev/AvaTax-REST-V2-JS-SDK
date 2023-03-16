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
import { MultiTaxFilingRegionModel } from "./MultiTaxFilingRegionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @class MultiTaxFilingModel
 */
 @JsonObject("MultiTaxFilingModel")
 export class MultiTaxFilingModel {
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("month", Number, true)
   month?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("year", Number, true)
   year?: number | undefined = undefined;
    /**
     * @type {Enums.WorksheetTypeId}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("type", Enums.WorksheetTypeIdConverter, true)
   type?: Enums.WorksheetTypeId | undefined = undefined;
    /**
     * @type {FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("taxSummary", FilingsTaxSummaryModel, true)
   taxSummary?: FilingsTaxSummaryModel | undefined = undefined;
    /**
     * @type {FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("taxDetails", [FilingsTaxDetailsModel], true)
   taxDetails?: FilingsTaxDetailsModel[] | undefined = undefined;
    /**
     * @type {MultiTaxFilingRegionModel[]}
     * @memberof MultiTaxFilingModel
     */
   @JsonProperty("filingRegions", [MultiTaxFilingRegionModel], true)
   filingRegions?: MultiTaxFilingRegionModel[] | undefined = undefined;
 }