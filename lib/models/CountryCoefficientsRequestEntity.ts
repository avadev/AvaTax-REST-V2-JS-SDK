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
import { CountryCoefficientsRequestModel } from "./CountryCoefficientsRequestModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the Country coefficients request input model, using which tax rules rates can be modified dynamically for CB transaciotns while applying tax rules
in order to reduce the variance for all the transactions at country level.
 * @export
 * @class CountryCoefficientsRequestEntity
 */
 @JsonObject("CountryCoefficientsRequestEntity")
 export class CountryCoefficientsRequestEntity {
    /**
     * @type {number}
     * @memberof CountryCoefficientsRequestEntity
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {CountryCoefficientsRequestModel[]}
     * @memberof CountryCoefficientsRequestEntity
     */
   @JsonProperty("coefficientDetails", [CountryCoefficientsRequestModel])
   coefficientDetails: CountryCoefficientsRequestModel[] = undefined;
 }