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
 * Represents an ISO 4217 currency code used for designating the currency of a transaction.
 * @export
 * @class CurrencyModel
 */
 @JsonObject("CurrencyModel")
 export class CurrencyModel {
    /**
     * @type {string}
     * @memberof CurrencyModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CurrencyModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CurrencyModel
     */
   @JsonProperty("decimalDigits", Number, true)
   decimalDigits?: number | undefined = undefined;
 }