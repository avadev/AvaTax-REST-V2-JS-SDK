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
 * Represents the coefficient, using which tax rules rates can be modified dynamically while applying tax rules
in order to reduce the variance for all the transactions at country level.
            
Avalara supports a few different types of tax rules.  For information about tax rule types, see
[TaxRuleTypeId](https://developer.avalara.com/cofficients)
 * @export
 * @class CountryCoefficientsResponseModel
 */
 @JsonObject("CountryCoefficientsResponseModel")
 export class CountryCoefficientsResponseModel {
    /**
     * @type {number}
     * @memberof CountryCoefficientsResponseModel
     */
   @JsonProperty("count", Number, true)
   count?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsResponseModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
 }