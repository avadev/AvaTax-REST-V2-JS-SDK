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
import { WorksheetDocument } from "./WorksheetDocument";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * An attachment associated with a filing return
 * @export
 * @class FilingReturnCreditModel
 */
 @JsonObject("FilingReturnCreditModel")
 export class FilingReturnCreditModel {
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   @JsonProperty("totalSales", Number, true)
   totalSales?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   @JsonProperty("totalExempt", Number, true)
   totalExempt?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   @JsonProperty("totalTaxable", Number, true)
   totalTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   @JsonProperty("totalTax", Number, true)
   totalTax?: number | undefined = undefined;
    /**
     * @type {WorksheetDocument[]}
     * @memberof FilingReturnCreditModel
     */
   @JsonProperty("transactionDetails", [WorksheetDocument], true)
   transactionDetails?: WorksheetDocument[] | undefined = undefined;
 }