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
import { AdvancedRuleModel } from "./AdvancedRuleModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Model representing an execution of an advanced rule for a company
 * @export
 * @class AdvancedRuleExecutionModel
 */
 @JsonObject("AdvancedRuleExecutionModel")
 export class AdvancedRuleExecutionModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("ruleExecutionId", String, true)
   ruleExecutionId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {Date}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("enabled", Boolean, true)
   enabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("continueOnError", Boolean, true)
   continueOnError?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("ruleId", String)
   ruleId: string = undefined;
    /**
     * @type {AdvancedRuleModel}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("rule", AdvancedRuleModel, true)
   rule?: AdvancedRuleModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("customerData", String, true)
   customerData?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("customerDataId", String, true)
   customerDataId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("createdBy", String, true)
   createdBy?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("createdOn", String, true)
   createdOn?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("modifiedBy", String, true)
   modifiedBy?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   @JsonProperty("modifiedOn", String, true)
   modifiedOn?: string | undefined = undefined;
 }