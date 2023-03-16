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
import { VarianceDetail } from "./VarianceDetail";
import { VarianceResponseLine } from "./VarianceResponseLine";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class VarianceResponseEntity
 */
 @JsonObject("VarianceResponseEntity")
 export class VarianceResponseEntity {
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("documentId", Number, true)
   documentId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("documentCode", String, true)
   documentCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("customInvoiceId", Number, true)
   customInvoiceId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("varianceId", Number, true)
   varianceId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("errorMessage", String, true)
   errorMessage?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("taxableVariance", Number, true)
   taxableVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("dutyVariance", Number, true)
   dutyVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("taxVariance", Number, true)
   taxVariance?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("totalTaxVariance", Number, true)
   totalTaxVariance?: number | undefined = undefined;
    /**
     * @type {VarianceDetail[]}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("unMappedDetails", [VarianceDetail], true)
   unMappedDetails?: VarianceDetail[] | undefined = undefined;
    /**
     * @type {VarianceResponseLine[]}
     * @memberof VarianceResponseEntity
     */
   @JsonProperty("varianceLines", [VarianceResponseLine], true)
   varianceLines?: VarianceResponseLine[] | undefined = undefined;
 }