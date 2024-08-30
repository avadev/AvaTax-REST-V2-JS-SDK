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
import { CreditTransactionDetailLines } from "./CreditTransactionDetailLines";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Credit Transaction Details
 * @export
 * @class CreditTransactionDetails
 */
 @JsonObject("CreditTransactionDetails")
 export class CreditTransactionDetails {
    /**
     * @type {string}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("docCode", String, true)
   docCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("docDate", DateConverter, true)
   docDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("totalExempt", Number, true)
   totalExempt?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("totalTaxable", Number, true)
   totalTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("totalTax", Number, true)
   totalTax?: number | undefined = undefined;
    /**
     * @type {CreditTransactionDetailLines[]}
     * @memberof CreditTransactionDetails
     */
   @JsonProperty("lines", [CreditTransactionDetailLines], true)
   lines?: CreditTransactionDetailLines[] | undefined = undefined;
 }