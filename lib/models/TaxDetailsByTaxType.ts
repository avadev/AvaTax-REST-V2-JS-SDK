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
import { TaxDetailsByTaxSubType } from "./TaxDetailsByTaxSubType";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Tax Details by Tax Type
 * @export
 * @class TaxDetailsByTaxType
 */
 @JsonObject("TaxDetailsByTaxType")
 export class TaxDetailsByTaxType {
    /**
     * @type {string}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("totalTaxable", Number, true)
   totalTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("totalExempt", Number, true)
   totalExempt?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("totalNonTaxable", Number, true)
   totalNonTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("totalTax", Number, true)
   totalTax?: number | undefined = undefined;
    /**
     * @type {TaxDetailsByTaxSubType[]}
     * @memberof TaxDetailsByTaxType
     */
   @JsonProperty("taxSubTypeDetails", [TaxDetailsByTaxSubType], true)
   taxSubTypeDetails?: TaxDetailsByTaxSubType[] | undefined = undefined;
 }