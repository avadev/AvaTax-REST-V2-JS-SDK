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
 * A currency-rounding-rule model controls how AvaTax rounds calculated tax for a given
account and currency.
            
Each rule is effective-dated: it applies to transactions whose tax date falls within the
`effDate`/`endDate` window. When no account-specific rule applies for a currency on a
transaction's tax date, the tax engine uses standard decimal precision (no rounding).
            
An account may hold several rules for the same currency, and their windows may overlap: for a
given tax date the rule with the latest `effDate` whose window contains that date applies, so
adding a later-dated rule supersedes an earlier one. Two rules sharing a `currencyCode` and
`effDate` are ambiguous and are rejected.
            
A rule can only be created for a currency that already has an Avalara system default (see
the `ListCurrencyRoundingRuleDefaults` definitions API). The rounding method is fixed
(rounds halves away from zero) and is an internal implementation detail, not exposed here;
`precision` - `0` for the whole currency unit, or `2` for standard decimal cents - is the
only control over the rounding behavior.
 * @export
 * @class AccountCurrencyRoundingRuleModel
 */
 @JsonObject("AccountCurrencyRoundingRuleModel")
 export class AccountCurrencyRoundingRuleModel {
    /**
     * @type {number}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("currencyCode", String)
   currencyCode: string = undefined;
    /**
     * @type {number}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("precision", Number)
   precision: number = undefined;
    /**
     * @type {Date}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("effDate", DateConverter)
   effDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountCurrencyRoundingRuleModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }