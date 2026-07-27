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
 * Represents a create Custom Rules import batch response model.
 * @export
 * @class CreateCustomRulesBatchResponseModel
 */
 @JsonObject("CreateCustomRulesBatchResponseModel")
 export class CreateCustomRulesBatchResponseModel {
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Enums.BatchStatus}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("status", Enums.BatchStatusConverter, true)
   status?: Enums.BatchStatus | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("startedDate", DateConverter, true)
   startedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("recordCount", Number, true)
   recordCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("currentRecord", Number, true)
   currentRecord?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("completedDate", DateConverter, true)
   completedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {BatchFileModel[]}
     * @memberof CreateCustomRulesBatchResponseModel
     */
   @JsonProperty("files", [BatchFileModel], true)
   files?: BatchFileModel[] | undefined = undefined;
 }