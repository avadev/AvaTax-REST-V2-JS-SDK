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
 * Memory usage statistics
 * @export
 * @class MemoryUsageStats
 */
 @JsonObject("MemoryUsageStats")
 export class MemoryUsageStats {
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("totalPhysicalMemory", Number, true)
   totalPhysicalMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("totalPhysicalMemoryGB", Number, true)
   totalPhysicalMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("availablePhysicalMemory", Number, true)
   availablePhysicalMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("availablePhysicalMemoryGB", Number, true)
   availablePhysicalMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("usedPhysicalMemory", Number, true)
   usedPhysicalMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("usedPhysicalMemoryGB", Number, true)
   usedPhysicalMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("physicalMemoryUsagePercentage", Number, true)
   physicalMemoryUsagePercentage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("totalVirtualMemory", Number, true)
   totalVirtualMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("totalVirtualMemoryGB", Number, true)
   totalVirtualMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("availableVirtualMemory", Number, true)
   availableVirtualMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("availableVirtualMemoryGB", Number, true)
   availableVirtualMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("usedVirtualMemory", Number, true)
   usedVirtualMemory?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("usedVirtualMemoryGB", Number, true)
   usedVirtualMemoryGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("virtualMemoryUsagePercentage", Number, true)
   virtualMemoryUsagePercentage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapSize", Number, true)
   managedHeapSize?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapSizeGB", Number, true)
   managedHeapSizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapUsed", Number, true)
   managedHeapUsed?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapUsedGB", Number, true)
   managedHeapUsedGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapFree", Number, true)
   managedHeapFree?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapFreeGB", Number, true)
   managedHeapFreeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("managedHeapUsagePercentage", Number, true)
   managedHeapUsagePercentage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("workingSetSize", Number, true)
   workingSetSize?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("workingSetSizeGB", Number, true)
   workingSetSizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("privateMemorySize", Number, true)
   privateMemorySize?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("privateMemorySizeGB", Number, true)
   privateMemorySizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("peakWorkingSetSize", Number, true)
   peakWorkingSetSize?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("peakWorkingSetSizeGB", Number, true)
   peakWorkingSetSizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("peakVirtualMemorySize", Number, true)
   peakVirtualMemorySize?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("peakVirtualMemorySizeGB", Number, true)
   peakVirtualMemorySizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("garbageCollectionGen0Count", Number, true)
   garbageCollectionGen0Count?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("garbageCollectionGen1Count", Number, true)
   garbageCollectionGen1Count?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("garbageCollectionGen2Count", Number, true)
   garbageCollectionGen2Count?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("timestamp", DateConverter, true)
   timestamp?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("machineName", String, true)
   machineName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("processName", String, true)
   processName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof MemoryUsageStats
     */
   @JsonProperty("processId", Number, true)
   processId?: number | undefined = undefined;
 }