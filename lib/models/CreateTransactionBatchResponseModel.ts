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
import { BatchFileModel } from "./BatchFileModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a create transaction batch response model.
 * @export
 * @class CreateTransactionBatchResponseModel
 */
 @JsonObject("CreateTransactionBatchResponseModel")
 export class CreateTransactionBatchResponseModel {
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Enums.BatchStatus}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("status", Enums.BatchStatusConverter, true)
   status?: Enums.BatchStatus | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("startedDate", DateConverter, true)
   startedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("recordCount", Number, true)
   recordCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("currentRecord", Number, true)
   currentRecord?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("completedDate", DateConverter, true)
   completedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {BatchFileModel[]}
     * @memberof CreateTransactionBatchResponseModel
     */
   @JsonProperty("files", [BatchFileModel], true)
   files?: BatchFileModel[] | undefined = undefined;
 }