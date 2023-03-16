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
import { CreateTransactionModel } from "./CreateTransactionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Replace an existing transaction recorded in AvaTax with a new one.
 * @export
 * @class AdjustTransactionModel
 */
 @JsonObject("AdjustTransactionModel")
 export class AdjustTransactionModel {
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof AdjustTransactionModel
     */
   @JsonProperty("adjustmentReason", Enums.AdjustmentReasonConverter)
   adjustmentReason: Enums.AdjustmentReason = undefined;
    /**
     * @type {string}
     * @memberof AdjustTransactionModel
     */
   @JsonProperty("adjustmentDescription", String, true)
   adjustmentDescription?: string | undefined = undefined;
    /**
     * @type {CreateTransactionModel}
     * @memberof AdjustTransactionModel
     */
   @JsonProperty("newTransaction", CreateTransactionModel)
   newTransaction: CreateTransactionModel = undefined;
 }