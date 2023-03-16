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
import { TransactionModel } from "./TransactionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the exact API request and response from the original transaction API call, if available
 * @export
 * @class OriginalApiRequestResponseModel
 */
 @JsonObject("OriginalApiRequestResponseModel")
 export class OriginalApiRequestResponseModel {
    /**
     * @type {CreateTransactionModel}
     * @memberof OriginalApiRequestResponseModel
     */
   @JsonProperty("request", CreateTransactionModel, true)
   request?: CreateTransactionModel | undefined = undefined;
    /**
     * @type {TransactionModel}
     * @memberof OriginalApiRequestResponseModel
     */
   @JsonProperty("response", TransactionModel, true)
   response?: TransactionModel | undefined = undefined;
 }