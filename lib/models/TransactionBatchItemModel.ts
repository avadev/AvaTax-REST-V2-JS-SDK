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
import { BatchAdjustTransactionModel } from "./BatchAdjustTransactionModel";
import { CreateOrAdjustTransactionModel } from "./CreateOrAdjustTransactionModel";
import { BatchVoidTransactionModel } from "./BatchVoidTransactionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a transaction batch item.
Only one child transaction model should contain data.
 * @export
 * @class TransactionBatchItemModel
 */
 @JsonObject("TransactionBatchItemModel")
 export class TransactionBatchItemModel {
    /**
     * @type {string}
     * @memberof TransactionBatchItemModel
     */
   @JsonProperty("memo", String, true)
   memo?: string | undefined = undefined;
    /**
     * @type {CreateTransactionModel}
     * @memberof TransactionBatchItemModel
     */
   @JsonProperty("createTransactionModel", CreateTransactionModel, true)
   createTransactionModel?: CreateTransactionModel | undefined = undefined;
    /**
     * @type {BatchAdjustTransactionModel}
     * @memberof TransactionBatchItemModel
     */
   @JsonProperty("adjustTransactionModel", BatchAdjustTransactionModel, true)
   adjustTransactionModel?: BatchAdjustTransactionModel | undefined = undefined;
    /**
     * @type {CreateOrAdjustTransactionModel}
     * @memberof TransactionBatchItemModel
     */
   @JsonProperty("createOrAdjustTransactionModel", CreateOrAdjustTransactionModel, true)
   createOrAdjustTransactionModel?: CreateOrAdjustTransactionModel | undefined = undefined;
    /**
     * @type {BatchVoidTransactionModel}
     * @memberof TransactionBatchItemModel
     */
   @JsonProperty("voidTransactionModel", BatchVoidTransactionModel, true)
   voidTransactionModel?: BatchVoidTransactionModel | undefined = undefined;
 }