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
import { FilingAdjustmentModel } from "./FilingAdjustmentModel";
import { FilingAugmentationModel } from "./FilingAugmentationModel";
import { FilingPaymentModel } from "./FilingPaymentModel";
import { FilingAttachmentModel } from "./FilingAttachmentModel";
import { FilingReturnCreditModel } from "./FilingReturnCreditModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Filing Returns Model
 * @export
 * @class FilingReturnModel
 */
 @JsonObject("FilingReturnModel")
 export class FilingReturnModel {
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filingRegionId", Number, true)
   filingRegionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filingCalendarId", Number, true)
   filingCalendarId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("registrationId", String, true)
   registrationId?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("resourceFileId", Number, true)
   resourceFileId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingReturnModel
     */
   @JsonProperty("status", Enums.FilingStatusIdConverter, true)
   status?: Enums.FilingStatusId | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filingFrequency", Enums.FilingFrequencyIdConverter, true)
   filingFrequency?: Enums.FilingFrequencyId | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filedDate", DateConverter, true)
   filedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   @JsonProperty("startPeriod", DateConverter, true)
   startPeriod?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   @JsonProperty("endPeriod", DateConverter, true)
   endPeriod?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("salesAmount", Number, true)
   salesAmount?: number | undefined = undefined;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filingType", Enums.FilingTypeIdConverter, true)
   filingType?: Enums.FilingTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("formName", String, true)
   formName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("remitAmount", Number, true)
   remitAmount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("formCode", String, true)
   formCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("collectAmount", Number, true)
   collectAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxDueAmount", Number, true)
   taxDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("nonTaxableDueAmount", Number, true)
   nonTaxableDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseTaxAmount", Number, true)
   consumerUseTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseTaxDueAmount", Number, true)
   consumerUseTaxDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseNonTaxableAmount", Number, true)
   consumerUseNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseTaxableAmount", Number, true)
   consumerUseTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("totalAdjustments", Number, true)
   totalAdjustments?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("excludedSalesAmount", Number, true)
   excludedSalesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("excludedNonTaxableAmount", Number, true)
   excludedNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("excludedTaxAmount", Number, true)
   excludedTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("carryOverSalesAmount", Number, true)
   carryOverSalesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("carryOverNonTaxableAmount", Number, true)
   carryOverNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("carryOverTaxAmount", Number, true)
   carryOverTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("carryOverConsumerUseTaxAmount", Number, true)
   carryOverConsumerUseTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxAccrualAmount", Number, true)
   taxAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("salesAccrualAmount", Number, true)
   salesAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("nonTaxableAccrualAmount", Number, true)
   nonTaxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("taxableAccrualAmount", Number, true)
   taxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("salesTaxAccrualAmount", Number, true)
   salesTaxAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("sellersUseTaxAccrualAmount", Number, true)
   sellersUseTaxAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseTaxAccrualAmount", Number, true)
   consumerUseTaxAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseTaxableAccrualAmount", Number, true)
   consumerUseTaxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("consumerUseNonTaxableAccrualAmount", Number, true)
   consumerUseNonTaxableAccrualAmount?: number | undefined = undefined;
    /**
     * @type {FilingAdjustmentModel[]}
     * @memberof FilingReturnModel
     */
   @JsonProperty("adjustments", [FilingAdjustmentModel], true)
   adjustments?: FilingAdjustmentModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("totalAugmentations", Number, true)
   totalAugmentations?: number | undefined = undefined;
    /**
     * @type {FilingAugmentationModel[]}
     * @memberof FilingReturnModel
     */
   @JsonProperty("augmentations", [FilingAugmentationModel], true)
   augmentations?: FilingAugmentationModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("totalPayments", Number, true)
   totalPayments?: number | undefined = undefined;
    /**
     * @type {FilingPaymentModel[]}
     * @memberof FilingReturnModel
     */
   @JsonProperty("payments", [FilingPaymentModel], true)
   payments?: FilingPaymentModel[] | undefined = undefined;
    /**
     * @type {Enums.AccrualType}
     * @memberof FilingReturnModel
     */
   @JsonProperty("accrualType", Enums.AccrualTypeConverter, true)
   accrualType?: Enums.AccrualType | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("month", Number, true)
   month?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("year", Number, true)
   year?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {FilingAttachmentModel[]}
     * @memberof FilingReturnModel
     */
   @JsonProperty("attachments", [FilingAttachmentModel], true)
   attachments?: FilingAttachmentModel[] | undefined = undefined;
    /**
     * @type {FilingReturnCreditModel}
     * @memberof FilingReturnModel
     */
   @JsonProperty("excludedCarryOverCredits", FilingReturnCreditModel, true)
   excludedCarryOverCredits?: FilingReturnCreditModel | undefined = undefined;
    /**
     * @type {FilingReturnCreditModel}
     * @memberof FilingReturnModel
     */
   @JsonProperty("appliedCarryOverCredits", FilingReturnCreditModel, true)
   appliedCarryOverCredits?: FilingReturnCreditModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("liabilityCurrencyCode", String, true)
   liabilityCurrencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   @JsonProperty("filingCalendarCurrencyCode", String, true)
   filingCalendarCurrencyCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }