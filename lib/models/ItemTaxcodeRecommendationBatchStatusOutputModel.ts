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
import { ItemTaxcodeRecommendationBatchesOutputModel } from "./ItemTaxcodeRecommendationBatchesOutputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the output model containing the status and results of a tax code recommendation batch.
 * @export
 * @class ItemTaxcodeRecommendationBatchStatusOutputModel
 */
 @JsonObject("ItemTaxcodeRecommendationBatchStatusOutputModel")
 export class ItemTaxcodeRecommendationBatchStatusOutputModel {
    /**
     * @type {number}
     * @memberof ItemTaxcodeRecommendationBatchStatusOutputModel
     */
   @JsonProperty("batchId", Number, true)
   batchId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchStatusOutputModel
     */
   @JsonProperty("batchStatus", String, true)
   batchStatus?: string | undefined = undefined;
    /**
     * @type {ItemTaxcodeRecommendationBatchesOutputModel[]}
     * @memberof ItemTaxcodeRecommendationBatchStatusOutputModel
     */
   @JsonProperty("value", [ItemTaxcodeRecommendationBatchesOutputModel], true)
   value?: ItemTaxcodeRecommendationBatchesOutputModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchStatusOutputModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
 }