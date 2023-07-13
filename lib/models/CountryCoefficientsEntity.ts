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
 * @class CountryCoefficientsEntity
 */
 @JsonObject("CountryCoefficientsEntity")
 export class CountryCoefficientsEntity {
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("coefficientsId", Number, true)
   coefficientsId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("coefficient", Number, true)
   coefficient?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("taxSubTypeId", String, true)
   taxSubTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("unitOfBasisId", Number, true)
   unitOfBasisId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("isApplicable", Boolean, true)
   isApplicable?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CountryCoefficientsEntity
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
 }