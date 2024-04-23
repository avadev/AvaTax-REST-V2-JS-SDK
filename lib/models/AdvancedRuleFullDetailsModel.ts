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
 * Model for Advanced Rules when full details are requested
 * @export
 * @class AdvancedRuleFullDetailsModel
 */
 @JsonObject("AdvancedRuleFullDetailsModel")
 export class AdvancedRuleFullDetailsModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("createdBy", String, true)
   createdBy?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("createdOn", String, true)
   createdOn?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("isSystemRule", Boolean, true)
   isSystemRule?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("isVisibleInCUP", Boolean, true)
   isVisibleInCUP?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("isTest", Boolean, true)
   isTest?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("customerDataSchema", String, true)
   customerDataSchema?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("ruleId", String, true)
   ruleId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("arEntitlementRequired", Boolean, true)
   arEntitlementRequired?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   @JsonProperty("executionPosition", String, true)
   executionPosition?: string | undefined = undefined;
 }