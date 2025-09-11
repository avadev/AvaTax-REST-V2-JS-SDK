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
 * Represents a summary of the validation results for a dynamic rule.
 * @export
 * @class DynamicRuleValidationSummaryModel
 */
 @JsonObject("DynamicRuleValidationSummaryModel")
 export class DynamicRuleValidationSummaryModel {
    /**
     * @type {string}
     * @memberof DynamicRuleValidationSummaryModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleValidationSummaryModel
     */
   @JsonProperty("errorCount", Number, true)
   errorCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleValidationSummaryModel
     */
   @JsonProperty("warningCount", Number, true)
   warningCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleValidationSummaryModel
     */
   @JsonProperty("infoCount", Number, true)
   infoCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleValidationSummaryModel
     */
   @JsonProperty("taxRuleCount", Number, true)
   taxRuleCount?: number | undefined = undefined;
 }