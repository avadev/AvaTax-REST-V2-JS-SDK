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
import { DynamicRuleDefinitionInputModel } from "./DynamicRuleDefinitionInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Dynamic Rule is a type of a custom rule which is similar to an Advanced Rule, but
has a graph-based execution flow made up of modular Conditions and Actions that may
be linked to one or more traditional custom Tax Rules.
 * @export
 * @class DynamicRuleInputModel
 */
 @JsonObject("DynamicRuleInputModel")
 export class DynamicRuleInputModel {
    /**
     * @type {DynamicRuleDefinitionInputModel}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("definition", DynamicRuleDefinitionInputModel)
   definition: DynamicRuleDefinitionInputModel = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("effectiveDate", DateConverter)
   effectiveDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("endDate", DateConverter)
   endDate: Date = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("enabled", Boolean)
   enabled: boolean = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleInputModel
     */
   @JsonProperty("continueOnError", Boolean)
   continueOnError: boolean = undefined;
 }