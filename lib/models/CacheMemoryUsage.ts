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
 * Cache memory usage details
 * @export
 * @class CacheMemoryUsage
 */
 @JsonObject("CacheMemoryUsage")
 export class CacheMemoryUsage {
    /**
     * @type {object}
     * @memberof CacheMemoryUsage
     */
   @JsonProperty("caches", Object, true)
   caches?: object | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheMemoryUsage
     */
   @JsonProperty("totalCacheMemory", Number, true)
   totalCacheMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheMemoryUsage
     */
   @JsonProperty("totalCacheMemoryGB", Number, true)
   totalCacheMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheMemoryUsage
     */
   @JsonProperty("totalCacheCount", Number, true)
   totalCacheCount?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CacheMemoryUsage
     */
   @JsonProperty("timestamp", DateConverter, true)
   timestamp?: Date | undefined = undefined;
 }