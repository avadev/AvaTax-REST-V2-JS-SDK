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
 * Memory optimization recommendation
 * @export
 * @class MemoryRecommendation
 */
 @JsonObject("MemoryRecommendation")
 export class MemoryRecommendation {
    /**
     * @type {string}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("impact", String, true)
   impact?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("implementation", String, true)
   implementation?: string | undefined = undefined;
    /**
     * @type {Enums.MemoryRecommendationPriority}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("priority", Enums.MemoryRecommendationPriorityConverter, true)
   priority?: Enums.MemoryRecommendationPriority | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryRecommendation
     */
   @JsonProperty("estimatedMemorySavingsMB", Number, true)
   estimatedMemorySavingsMB?: number | undefined = undefined;
 }