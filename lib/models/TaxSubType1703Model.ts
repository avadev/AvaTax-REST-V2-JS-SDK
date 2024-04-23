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
 * Represents RateTypeTaxTypeMapping Model
 * @export
 * @class TaxSubType1703Model
 */
 @JsonObject("TaxSubType1703Model")
 export class TaxSubType1703Model {
    /**
     * @type {number}
     * @memberof TaxSubType1703Model
     */
   @JsonProperty("taxSubTypeIdSK", Number, true)
   taxSubTypeIdSK?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxSubType1703Model
     */
   @JsonProperty("taxSubTypeId", String, true)
   taxSubTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxSubType1703Model
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
 }