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
import { FilingRegionModel } from "./FilingRegionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @class FilingModel
 */
 @JsonObject("FilingModel")
 export class FilingModel {
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("month", Number, true)
   month?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("year", Number, true)
   year?: number | undefined = undefined;
    /**
     * @type {Enums.WorksheetTypeId}
     * @memberof FilingModel
     */
   @JsonProperty("type", Enums.WorksheetTypeIdConverter, true)
   type?: Enums.WorksheetTypeId | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {FilingRegionModel[]}
     * @memberof FilingModel
     */
   @JsonProperty("filingRegions", [FilingRegionModel], true)
   filingRegions?: FilingRegionModel[] | undefined = undefined;
 }