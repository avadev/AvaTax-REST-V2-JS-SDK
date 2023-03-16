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
import { HsCode } from "./HsCode";
import { VarianceDetail } from "./VarianceDetail";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class VarianceResponseLine
 */
 @JsonObject("VarianceResponseLine")
 export class VarianceResponseLine {
    /**
     * @type {string}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("lineNo", String, true)
   lineNo?: string | undefined = undefined;
    /**
     * @type {HsCode}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("hsCodeVariance", HsCode, true)
   hsCodeVariance?: HsCode | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("dutyRateVariance", String, true)
   dutyRateVariance?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("taxableVariance", Number, true)
   taxableVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("dutyVariance", Number, true)
   dutyVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("taxVariance", Number, true)
   taxVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("totalTaxVariance", Number, true)
   totalTaxVariance?: number | undefined = undefined;
    /**
     * @type {VarianceDetail[]}
     * @memberof VarianceResponseLine
     */
   @JsonProperty("unMappedDetails", [VarianceDetail], true)
   unMappedDetails?: VarianceDetail[] | undefined = undefined;
 }