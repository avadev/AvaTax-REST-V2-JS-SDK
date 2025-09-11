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
 * Represents a component within a Dynamic Rule definition.
Components define the logic and flow of a rule, and include condition nodes, action nodes, and rule-wide variables.
 * @export
 * @class DynamicRuleComponentInputModel
 */
 @JsonObject("DynamicRuleComponentInputModel")
 export class DynamicRuleComponentInputModel {
    /**
     * @type {string}
     * @memberof DynamicRuleComponentInputModel
     */
   @JsonProperty("id", String)
   id: string = undefined;
    /**
     * @type {Enums.DynamicRuleComponentType}
     * @memberof DynamicRuleComponentInputModel
     */
   @JsonProperty("type", Enums.DynamicRuleComponentTypeConverter)
   type: Enums.DynamicRuleComponentType = undefined;
    /**
     * @type {Enums.DynamicRuleComponentSubtype}
     * @memberof DynamicRuleComponentInputModel
     */
   @JsonProperty("subtype", Enums.DynamicRuleComponentSubtypeConverter)
   subtype: Enums.DynamicRuleComponentSubtype = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleComponentInputModel
     */
   @JsonProperty("data", String)
   data: string = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleComponentInputModel
     */
   @JsonProperty("next", [String])
   next: string[] = undefined;
 }