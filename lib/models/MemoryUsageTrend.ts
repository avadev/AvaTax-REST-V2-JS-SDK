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
import { MemoryUsageStats } from "./MemoryUsageStats";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Memory usage trend data
 * @export
 * @class MemoryUsageTrend
 */
 @JsonObject("MemoryUsageTrend")
 export class MemoryUsageTrend {
    /**
     * @type {MemoryUsageStats[]}
     * @memberof MemoryUsageTrend
     */
   @JsonProperty("dataPoints", [MemoryUsageStats], true)
   dataPoints?: MemoryUsageStats[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryUsageTrend
     */
   @JsonProperty("duration", String, true)
   duration?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageTrend
     */
   @JsonProperty("averageMemoryUsage", Number, true)
   averageMemoryUsage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageTrend
     */
   @JsonProperty("peakMemoryUsage", Number, true)
   peakMemoryUsage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageTrend
     */
   @JsonProperty("lowMemoryUsage", Number, true)
   lowMemoryUsage?: number | undefined = undefined;
 }