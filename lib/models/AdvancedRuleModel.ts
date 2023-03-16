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
 * A generic global advanced rule encapsulating a script
 * @export
 * @class AdvancedRuleModel
 */
 @JsonObject("AdvancedRuleModel")
 export class AdvancedRuleModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   @JsonProperty("ruleId", String, true)
   ruleId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleModel
     */
   @JsonProperty("arEntitlementRequired", Boolean, true)
   arEntitlementRequired?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   @JsonProperty("executionPosition", String, true)
   executionPosition?: string | undefined = undefined;
 }