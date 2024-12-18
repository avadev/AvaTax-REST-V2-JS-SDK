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
import { FilingsTaxSummaryModel } from "./FilingsTaxSummaryModel";
import { FilingsTaxDetailsModel } from "./FilingsTaxDetailsModel";
import { FilingReturnCreditModel } from "./FilingReturnCreditModel";
import { FilingAdjustmentModel } from "./FilingAdjustmentModel";
import { FilingAugmentationModel } from "./FilingAugmentationModel";
import { FilingPaymentModel } from "./FilingPaymentModel";
import { FilingAttachmentModel } from "./FilingAttachmentModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Filing Returns Model
 * @export
 * @class MultiTaxFilingReturnModel
 */
 @JsonObject("MultiTaxFilingReturnModel")
 export class MultiTaxFilingReturnModel {
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("filingCalendarId", Number, true)
   filingCalendarId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("registrationId", String, true)
   registrationId?: string | undefined = undefined;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("status", Enums.FilingStatusIdConverter, true)
   status?: Enums.FilingStatusId | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("filingFrequency", Enums.FilingFrequencyIdConverter, true)
   filingFrequency?: Enums.FilingFrequencyId | undefined = undefined;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("filingType", Enums.FilingTypeIdConverter, true)
   filingType?: Enums.FilingTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("formName", String, true)
   formName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("formCode", String, true)
   formCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("filedDate", DateConverter, true)
   filedDate?: Date | undefined = undefined;
    /**
     * @type {Enums.AccrualType}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("accrualType", Enums.AccrualTypeConverter, true)
   accrualType?: Enums.AccrualType | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("startPeriod", DateConverter, true)
   startPeriod?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("endPeriod", DateConverter, true)
   endPeriod?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("liabilityCurrencyCode", String, true)
   liabilityCurrencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("filingCalendarCurrencyCode", String, true)
   filingCalendarCurrencyCode?: string | undefined = undefined;
    /**
     * @type {FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("returnTaxSummary", FilingsTaxSummaryModel, true)
   returnTaxSummary?: FilingsTaxSummaryModel | undefined = undefined;
    /**
     * @type {FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("returnTaxDetails", [FilingsTaxDetailsModel], true)
   returnTaxDetails?: FilingsTaxDetailsModel[] | undefined = undefined;
    /**
     * @type {FilingReturnCreditModel}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("excludedCarryOverCredits", FilingReturnCreditModel, true)
   excludedCarryOverCredits?: FilingReturnCreditModel | undefined = undefined;
    /**
     * @type {FilingReturnCreditModel}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("appliedCarryOverCredits", FilingReturnCreditModel, true)
   appliedCarryOverCredits?: FilingReturnCreditModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("totalAdjustments", Number, true)
   totalAdjustments?: number | undefined = undefined;
    /**
     * @type {FilingAdjustmentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("adjustments", [FilingAdjustmentModel], true)
   adjustments?: FilingAdjustmentModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("totalAugmentations", Number, true)
   totalAugmentations?: number | undefined = undefined;
    /**
     * @type {FilingAugmentationModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("augmentations", [FilingAugmentationModel], true)
   augmentations?: FilingAugmentationModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("totalPayments", Number, true)
   totalPayments?: number | undefined = undefined;
    /**
     * @type {FilingPaymentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("payments", [FilingPaymentModel], true)
   payments?: FilingPaymentModel[] | undefined = undefined;
    /**
     * @type {FilingAttachmentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   @JsonProperty("attachments", [FilingAttachmentModel], true)
   attachments?: FilingAttachmentModel[] | undefined = undefined;
 }