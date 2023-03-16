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
 * Refund a committed transaction
 * @export
 * @class RefundTransactionModel
 */
 @JsonObject("RefundTransactionModel")
 export class RefundTransactionModel {
    /**
     * @type {string}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("refundTransactionCode", String, true)
   refundTransactionCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("refundDate", DateConverter)
   refundDate: Date = undefined;
    /**
     * @type {Enums.RefundType}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("refundType", Enums.RefundTypeConverter, true)
   refundType?: Enums.RefundType | undefined = undefined;
    /**
     * @type {number}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("refundPercentage", Number, true)
   refundPercentage?: number | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("refundLines", [String], true)
   refundLines?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof RefundTransactionModel
     */
   @JsonProperty("referenceCode", String, true)
   referenceCode?: string | undefined = undefined;
 }