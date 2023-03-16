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
 * A model for return adjustments.
 * @export
 * @class FilingAdjustmentModel
 */
 @JsonObject("FilingAdjustmentModel")
 export class FilingAdjustmentModel {
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("filingId", Number, true)
   filingId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("amount", Number)
   amount: number = undefined;
    /**
     * @type {Enums.AdjustmentPeriodTypeId}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("period", Enums.AdjustmentPeriodTypeIdConverter)
   period: Enums.AdjustmentPeriodTypeId = undefined;
    /**
     * @type {string}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("type", String)
   type: string = undefined;
    /**
     * @type {boolean}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("isCalculated", Boolean, true)
   isCalculated?: boolean | undefined = undefined;
    /**
     * @type {Enums.PaymentAccountTypeId}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("accountType", Enums.PaymentAccountTypeIdConverter)
   accountType: Enums.PaymentAccountTypeId = undefined;
    /**
     * @type {string}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("reason", String, true)
   reason?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }