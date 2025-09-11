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
 * Represents a valid expression token in Dynamic Rules, i.e. the variables, delimited by double curly braces,
that may be used when performing string manipulation or evaluating formulas within a Dynamic Rule.
 * @export
 * @class DynamicRuleTokenDefinitionModel
 */
 @JsonObject("DynamicRuleTokenDefinitionModel")
 export class DynamicRuleTokenDefinitionModel {
    /**
     * @type {string}
     * @memberof DynamicRuleTokenDefinitionModel
     */
   @JsonProperty("token", String, true)
   token?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleTokenDefinitionModel
     */
   @JsonProperty("tokenType", String, true)
   tokenType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleTokenDefinitionModel
     */
   @JsonProperty("evaluatedType", String, true)
   evaluatedType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleTokenDefinitionModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleTokenDefinitionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
 }