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
import { VarianceLine } from "./VarianceLine";
import { VarianceUnit } from "./VarianceUnit";
import { VarianceDetail } from "./VarianceDetail";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Request model used as input for Variance API.
 * @export
 * @class VarianceRequestModel
 */
 @JsonObject("VarianceRequestModel")
 export class VarianceRequestModel {
    /**
     * @type {number}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("documentId", Number, true)
   documentId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("documentCode", String, true)
   documentCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("purchaseOrderNo", String, true)
   purchaseOrderNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("referenceNo", String, true)
   referenceNo?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("exchangeRate", Number, true)
   exchangeRate?: number | undefined = undefined;
    /**
     * @type {VarianceLine[]}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("lines", [VarianceLine], true)
   lines?: VarianceLine[] | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("amount", VarianceUnit, true)
   amount?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("taxableAmount", VarianceUnit, true)
   taxableAmount?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("dutyPaid", VarianceUnit, true)
   dutyPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("taxPaid", VarianceUnit, true)
   taxPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceUnit}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("totalTaxPaid", VarianceUnit, true)
   totalTaxPaid?: VarianceUnit | undefined = undefined;
    /**
     * @type {VarianceDetail[]}
     * @memberof VarianceRequestModel
     */
   @JsonProperty("details", [VarianceDetail], true)
   details?: VarianceDetail[] | undefined = undefined;
 }