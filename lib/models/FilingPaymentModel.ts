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
 * A model for return payments.
 * @export
 * @class FilingPaymentModel
 */
 @JsonObject("FilingPaymentModel")
 export class FilingPaymentModel {
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("filingId", Number)
   filingId: number = undefined;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("paymentAmount", Number)
   paymentAmount: number = undefined;
    /**
     * @type {Enums.PaymentType}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("type", Enums.PaymentTypeConverter)
   type: Enums.PaymentType = undefined;
    /**
     * @type {boolean}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("isCalculated", Boolean, true)
   isCalculated?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }