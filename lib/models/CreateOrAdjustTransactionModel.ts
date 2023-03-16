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
 * Create or adjust transaction model
 * @export
 * @class CreateOrAdjustTransactionModel
 */
 @JsonObject("CreateOrAdjustTransactionModel")
 export class CreateOrAdjustTransactionModel {
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof CreateOrAdjustTransactionModel
     */
   @JsonProperty("adjustmentReason", Enums.AdjustmentReasonConverter, true)
   adjustmentReason?: Enums.AdjustmentReason | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateOrAdjustTransactionModel
     */
   @JsonProperty("adjustmentDescription", String, true)
   adjustmentDescription?: string | undefined = undefined;
    /**
     * @type {CreateTransactionModel}
     * @memberof CreateOrAdjustTransactionModel
     */
   @JsonProperty("createTransactionModel", CreateTransactionModel)
   createTransactionModel: CreateTransactionModel = undefined;
 }