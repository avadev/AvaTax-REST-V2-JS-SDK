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
import { DynamicRuleValidationSummaryModel } from "./DynamicRuleValidationSummaryModel";
import { DynamicRuleValidationMessageModel } from "./DynamicRuleValidationMessageModel";
import { DynamicRuleValidationPlanStepModel } from "./DynamicRuleValidationPlanStepModel";
import { DynamicRuleGeneratedTaxRuleModel } from "./DynamicRuleGeneratedTaxRuleModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the complete validation result for a dynamic rule, including a summary,
individual messages, an execution plan, and affected tax rules.
 * @export
 * @class DynamicRuleValidationResultModel
 */
 @JsonObject("DynamicRuleValidationResultModel")
 export class DynamicRuleValidationResultModel {
    /**
     * @type {DynamicRuleValidationSummaryModel}
     * @memberof DynamicRuleValidationResultModel
     */
   @JsonProperty("summary", DynamicRuleValidationSummaryModel, true)
   summary?: DynamicRuleValidationSummaryModel | undefined = undefined;
    /**
     * @type {DynamicRuleValidationMessageModel[]}
     * @memberof DynamicRuleValidationResultModel
     */
   @JsonProperty("messages", [DynamicRuleValidationMessageModel], true)
   messages?: DynamicRuleValidationMessageModel[] | undefined = undefined;
    /**
     * @type {DynamicRuleValidationPlanStepModel[]}
     * @memberof DynamicRuleValidationResultModel
     */
   @JsonProperty("executionPlan", [DynamicRuleValidationPlanStepModel], true)
   executionPlan?: DynamicRuleValidationPlanStepModel[] | undefined = undefined;
    /**
     * @type {DynamicRuleGeneratedTaxRuleModel[]}
     * @memberof DynamicRuleValidationResultModel
     */
   @JsonProperty("taxRules", [DynamicRuleGeneratedTaxRuleModel], true)
   taxRules?: DynamicRuleGeneratedTaxRuleModel[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleValidationResultModel
     */
   @JsonProperty("lookupFilesUsed", [String], true)
   lookupFilesUsed?: string[] | undefined = undefined;
 }