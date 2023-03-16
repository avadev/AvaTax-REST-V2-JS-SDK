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
 * Model for toggling visibility of an advanced rule for an account
 * @export
 * @class AdvancedRuleVisibilityModel
 */
 @JsonObject("AdvancedRuleVisibilityModel")
 export class AdvancedRuleVisibilityModel {
    /**
     * @type {boolean}
     * @memberof AdvancedRuleVisibilityModel
     */
   @JsonProperty("isVisible", Boolean, true)
   isVisible?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof AdvancedRuleVisibilityModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
 }