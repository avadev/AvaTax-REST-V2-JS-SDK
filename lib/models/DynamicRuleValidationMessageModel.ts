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
 * Represents a single validation message for a dynamic rule.
 * @export
 * @class DynamicRuleValidationMessageModel
 */
 @JsonObject("DynamicRuleValidationMessageModel")
 export class DynamicRuleValidationMessageModel {
    /**
     * @type {string}
     * @memberof DynamicRuleValidationMessageModel
     */
   @JsonProperty("level", String, true)
   level?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleValidationMessageModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleValidationMessageModel
     */
   @JsonProperty("refersTo", String, true)
   refersTo?: string | undefined = undefined;
 }