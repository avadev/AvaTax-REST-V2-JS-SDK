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
 * Represents the Country coefficients model, using which tax rules rates can be modified dynamically for CB transaciotns while applying tax rules
in order to reduce the variance for all the transactions at country level.
 * @export
 * @class CountryCoefficientsRequestModel
 */
 @JsonObject("CountryCoefficientsRequestModel")
 export class CountryCoefficientsRequestModel {
    /**
     * @type {string}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("companyCode", String)
   companyCode: string = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("coefficient", Number)
   coefficient: number = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("taxSubTypeId", String)
   taxSubTypeId: string = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("currencyCode", String)
   currencyCode: string = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("unitOfBasisId", Number)
   unitOfBasisId: number = undefined;
    /**
     * @type {boolean}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("isApplicable", Boolean)
   isApplicable: boolean = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("startDate", DateConverter)
   startDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsRequestModel
     */
   @JsonProperty("endDate", DateConverter)
   endDate: Date = undefined;
 }