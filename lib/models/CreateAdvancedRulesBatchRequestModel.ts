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
import { AdvancedRuleExecutionModel } from "./AdvancedRuleExecutionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a create advanced rules batch request model.
 * @export
 * @class CreateAdvancedRulesBatchRequestModel
 */
 @JsonObject("CreateAdvancedRulesBatchRequestModel")
 export class CreateAdvancedRulesBatchRequestModel {
    /**
     * @type {string}
     * @memberof CreateAdvancedRulesBatchRequestModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {boolean}
     * @memberof CreateAdvancedRulesBatchRequestModel
     */
   @JsonProperty("replaceExisting", Boolean, true)
   replaceExisting?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateAdvancedRulesBatchRequestModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
    /**
     * @type {AdvancedRuleExecutionModel[]}
     * @memberof CreateAdvancedRulesBatchRequestModel
     */
   @JsonProperty("executions", [AdvancedRuleExecutionModel])
   executions: AdvancedRuleExecutionModel[] = undefined;
 }