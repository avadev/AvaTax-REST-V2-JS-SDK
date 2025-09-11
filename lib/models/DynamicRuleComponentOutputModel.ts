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
 * @class DynamicRuleComponentOutputModel
 */
 @JsonObject("DynamicRuleComponentOutputModel")
 export class DynamicRuleComponentOutputModel {
    /**
     * @type {string}
     * @memberof DynamicRuleComponentOutputModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {Enums.DynamicRuleComponentType}
     * @memberof DynamicRuleComponentOutputModel
     */
   @JsonProperty("type", Enums.DynamicRuleComponentTypeConverter, true)
   type?: Enums.DynamicRuleComponentType | undefined = undefined;
    /**
     * @type {Enums.DynamicRuleComponentSubtype}
     * @memberof DynamicRuleComponentOutputModel
     */
   @JsonProperty("subtype", Enums.DynamicRuleComponentSubtypeConverter, true)
   subtype?: Enums.DynamicRuleComponentSubtype | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleComponentOutputModel
     */
   @JsonProperty("data", String, true)
   data?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleComponentOutputModel
     */
   @JsonProperty("next", [String], true)
   next?: string[] | undefined = undefined;
 }