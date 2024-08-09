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
 * Credit Transaction Detail Lines
 * @export
 * @class CreditTransactionDetailLines
 */
 @JsonObject("CreditTransactionDetailLines")
 export class CreditTransactionDetailLines {
    /**
     * @type {Date}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("reportingDate", DateConverter, true)
   reportingDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("lineNo", String, true)
   lineNo?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("lineAmount", Number, true)
   lineAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("exemptAmount", Number, true)
   exemptAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreditTransactionDetailLines
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
 }