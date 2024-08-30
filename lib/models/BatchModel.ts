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
 * Represents a batch of uploaded documents.
 * @export
 * @class BatchModel
 */
 @JsonObject("BatchModel")
 export class BatchModel {
    /**
     * @type {Enums.BatchType}
     * @memberof BatchModel
     */
   @JsonProperty("type", Enums.BatchTypeConverter)
   type: Enums.BatchType = undefined;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   @JsonProperty("batchAgent", String, true)
   batchAgent?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Enums.BatchStatus}
     * @memberof BatchModel
     */
   @JsonProperty("status", Enums.BatchStatusConverter, true)
   status?: Enums.BatchStatus | undefined = undefined;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   @JsonProperty("startedDate", DateConverter, true)
   startedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("recordCount", Number, true)
   recordCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("currentRecord", Number, true)
   currentRecord?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   @JsonProperty("completedDate", DateConverter, true)
   completedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {BatchFileModel[]}
     * @memberof BatchModel
     */
   @JsonProperty("files", [BatchFileModel], true)
   files?: BatchFileModel[] | undefined = undefined;
 }