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
 * Represents an input model of a single item for tax code recommendation batches (both synchronous and asynchronous).
 * @export
 * @class ItemTaxcodeRecommendationBatchesInputModel
 */
 @JsonObject("ItemTaxcodeRecommendationBatchesInputModel")
 export class ItemTaxcodeRecommendationBatchesInputModel {
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchesInputModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchesInputModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchesInputModel
     */
   @JsonProperty("itemType", String, true)
   itemType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchesInputModel
     */
   @JsonProperty("upc", String, true)
   upc?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBatchesInputModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
 }