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
 * 
 * @export
 * @class CappedFetchResult<T>
 */
 @JsonObject("CappedFetchResult<T>")
 export class CappedFetchResult<T> {
    /**
     * @type {boolean}
     * @memberof CappedFetchResult<T>
     */
   @JsonProperty("@isRecordsetCountCapped", Boolean, true)
   "@isRecordsetCountCapped"?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CappedFetchResult<T>
     */
   @JsonProperty("@recordsetCount", Number, true)
   "@recordsetCount"?: number | undefined = undefined;
    /**
     * @type {object[]}
     * @memberof CappedFetchResult<T>
     */
   @JsonProperty("value", [Object], true)
   value?: object[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CappedFetchResult<T>
     */
   @JsonProperty("@nextLink", String, true)
   "@nextLink"?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CappedFetchResult<T>
     */
   @JsonProperty("pageKey", String, true)
   pageKey?: string | undefined = undefined;
 }