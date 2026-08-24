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
 * Represents a component within a Custom Rule definition.
Components define the logic and flow of a rule, and include condition nodes, action nodes, and rule-wide variables.
 * @export
 * @class CustomRuleComponentOutputModel
 */
 @JsonObject("CustomRuleComponentOutputModel")
 export class CustomRuleComponentOutputModel {
    /**
     * @type {string}
     * @memberof CustomRuleComponentOutputModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {Enums.CustomRuleComponentType}
     * @memberof CustomRuleComponentOutputModel
     */
   @JsonProperty("type", Enums.CustomRuleComponentTypeConverter, true)
   type?: Enums.CustomRuleComponentType | undefined = undefined;
    /**
     * @type {Enums.CustomRuleComponentSubtype}
     * @memberof CustomRuleComponentOutputModel
     */
   @JsonProperty("subtype", Enums.CustomRuleComponentSubtypeConverter, true)
   subtype?: Enums.CustomRuleComponentSubtype | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleComponentOutputModel
     */
   @JsonProperty("data", String, true)
   data?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleComponentOutputModel
     */
   @JsonProperty("next", [String], true)
   next?: string[] | undefined = undefined;
 }