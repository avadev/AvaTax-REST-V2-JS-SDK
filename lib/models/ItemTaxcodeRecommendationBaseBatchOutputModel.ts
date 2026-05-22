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
 * One recommended tax code (code, level, and Indix description) for bulk tax code recommendation responses.
 * @export
 * @class ItemTaxcodeRecommendationBaseBatchOutputModel
 */
 @JsonObject("ItemTaxcodeRecommendationBaseBatchOutputModel")
 export class ItemTaxcodeRecommendationBaseBatchOutputModel {
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBaseBatchOutputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBaseBatchOutputModel
     */
   @JsonProperty("level", String, true)
   level?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxcodeRecommendationBaseBatchOutputModel
     */
   @JsonProperty("taxCodeDescription", String, true)
   taxCodeDescription?: string | undefined = undefined;
 }