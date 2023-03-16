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
 * A request to void a previously created transaction.
 * @export
 * @class BatchVoidTransactionModel
 */
 @JsonObject("BatchVoidTransactionModel")
 export class BatchVoidTransactionModel {
    /**
     * @type {string}
     * @memberof BatchVoidTransactionModel
     */
   @JsonProperty("companyCode", String)
   companyCode: string = undefined;
    /**
     * @type {string}
     * @memberof BatchVoidTransactionModel
     */
   @JsonProperty("transactionCode", String)
   transactionCode: string = undefined;
    /**
     * @type {string}
     * @memberof BatchVoidTransactionModel
     */
   @JsonProperty("documentType", String, true)
   documentType?: string | undefined = undefined;
    /**
     * @type {Enums.VoidReasonCode}
     * @memberof BatchVoidTransactionModel
     */
   @JsonProperty("code", Enums.VoidReasonCodeConverter)
   code: Enums.VoidReasonCode = undefined;
 }