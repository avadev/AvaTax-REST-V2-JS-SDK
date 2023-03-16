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
import { VarianceUnit } from "./VarianceUnit";
import { VarianceDetail } from "./VarianceDetail";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class VarianceLine
 */
 @JsonObject("VarianceLine")
 export class VarianceLine {
    /**
     * @type {string}
     * @memberof VarianceLine
     */
   @JsonProperty("lineNo", String, true)
   lineNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceLine
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceLine
     */
   @JsonProperty("dutyRate", Number, true)
   dutyRate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceLine
     */
   @JsonProperty("taxRate", Number, true)
   taxRate?: number | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceLine
     */
   @JsonProperty("amount", VarianceUnit, true)
   amount?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceLine
     */
   @JsonProperty("taxableAmount", VarianceUnit, true)
   taxableAmount?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceLine
     */
   @JsonProperty("dutyPaid", VarianceUnit, true)
   dutyPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceLine
     */
   @JsonProperty("taxPaid", VarianceUnit, true)
   taxPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceLine
     */
   @JsonProperty("totalTaxPaid", VarianceUnit, true)
   totalTaxPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceDetail[]}
     * @memberof VarianceLine
     */
   @JsonProperty("details", [VarianceDetail], true)
   details?: VarianceDetail[] | undefined = undefined;
 }