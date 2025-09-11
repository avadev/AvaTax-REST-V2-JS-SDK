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
 * Individual cache information
 * @export
 * @class CacheInfo
 */
 @JsonObject("CacheInfo")
 export class CacheInfo {
    /**
     * @type {string}
     * @memberof CacheInfo
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheInfo
     */
   @JsonProperty("memorySizeBytes", Number, true)
   memorySizeBytes?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheInfo
     */
   @JsonProperty("memorySizeMB", Number, true)
   memorySizeMB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheInfo
     */
   @JsonProperty("memorySizeGB", Number, true)
   memorySizeGB?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CacheInfo
     */
   @JsonProperty("itemCount", Number, true)
   itemCount?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CacheInfo
     */
   @JsonProperty("isLoaded", Boolean, true)
   isLoaded?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CacheInfo
     */
   @JsonProperty("lastRefreshTime", DateConverter, true)
   lastRefreshTime?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CacheInfo
     */
   @JsonProperty("lastRefreshDuration", String, true)
   lastRefreshDuration?: string | undefined = undefined;
 }