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
 * @class FilingsTaxDetailsModel
 */
 @JsonObject("FilingsTaxDetailsModel")
 export class FilingsTaxDetailsModel {
    /**
     * @type {string}
     * @memberof FilingsTaxDetailsModel
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   @JsonProperty("salesAmount", Number, true)
   salesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   @JsonProperty("numberOfNights", Number, true)
   numberOfNights?: number | undefined = undefined;
 }