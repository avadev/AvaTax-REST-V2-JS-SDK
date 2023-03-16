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
import { VerifyTransactionModel } from "./VerifyTransactionModel";
import { ChangeTransactionCodeModel } from "./ChangeTransactionCodeModel";
import { CommitTransactionModel } from "./CommitTransactionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Settle this transaction with your ledger by executing one or many actions against that transaction.
            
You may use this endpoint to verify the transaction, change the transaction's code, and commit the transaction for reporting purposes.
This endpoint may be used to execute any or all of these actions at once.
 * @export
 * @class SettleTransactionModel
 */
 @JsonObject("SettleTransactionModel")
 export class SettleTransactionModel {
    /**
     * @type {VerifyTransactionModel}
     * @memberof SettleTransactionModel
     */
   @JsonProperty("verify", VerifyTransactionModel, true)
   verify?: VerifyTransactionModel | undefined = undefined;
    /**
     * @type {ChangeTransactionCodeModel}
     * @memberof SettleTransactionModel
     */
   @JsonProperty("changeCode", ChangeTransactionCodeModel, true)
   changeCode?: ChangeTransactionCodeModel | undefined = undefined;
    /**
     * @type {CommitTransactionModel}
     * @memberof SettleTransactionModel
     */
   @JsonProperty("commit", CommitTransactionModel, true)
   commit?: CommitTransactionModel | undefined = undefined;
 }