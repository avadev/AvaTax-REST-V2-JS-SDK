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
 * Verify this transaction by matching it to values in your accounting system.
            
You may specify one or more of the following fields to verify: `date`, `totalAmount`, or `totalTax`.
This call will report an error if there is any difference between the data stored in AvaTax and
the data stored in your accounting system.
 * @export
 * @class VerifyTransactionModel
 */
 @JsonObject("VerifyTransactionModel")
 export class VerifyTransactionModel {
    /**
     * @type {Date}
     * @memberof VerifyTransactionModel
     */
   @JsonProperty("verifyTransactionDate", DateConverter, true)
   verifyTransactionDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof VerifyTransactionModel
     */
   @JsonProperty("verifyTotalAmount", Number, true)
   verifyTotalAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VerifyTransactionModel
     */
   @JsonProperty("verifyTotalTax", Number, true)
   verifyTotalTax?: number | undefined = undefined;
 }