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
 * An Avalara system default currency-rounding-rule. These describe the rounding behavior
AvaTax applies to a currency when an account has no rule of its own, and are the set of
currencies for which an account may create its own Avalara.AvaTax.AccountServices.Models.v2.AccountCurrencyRoundingRuleModel.
            
This is reference data, not account-specific - it never exposes the internal system
account that these defaults are stored against.
 * @export
 * @class CurrencyRoundingRuleDefaultModel
 */
 @JsonObject("CurrencyRoundingRuleDefaultModel")
 export class CurrencyRoundingRuleDefaultModel {
    /**
     * @type {string}
     * @memberof CurrencyRoundingRuleDefaultModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CurrencyRoundingRuleDefaultModel
     */
   @JsonProperty("precision", Number, true)
   precision?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CurrencyRoundingRuleDefaultModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CurrencyRoundingRuleDefaultModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }