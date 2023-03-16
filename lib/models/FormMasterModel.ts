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
 * Represents information about a tax form known to Avalara
 * @export
 * @class FormMasterModel
 */
 @JsonObject("FormMasterModel")
 export class FormMasterModel {
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("formTypeId", Number, true)
   formTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("legacyReturnName", String, true)
   legacyReturnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("taxFormName", String, true)
   taxFormName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isEffective", Boolean, true)
   isEffective?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("authorityName", String, true)
   authorityName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("shortCode", String, true)
   shortCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("dueDay", Number, true)
   dueDay?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("delinquentDay", Number, true)
   delinquentDay?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("fiscalYearStartMonth", Number, true)
   fiscalYearStartMonth?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasMultiFrequencies", Boolean, true)
   hasMultiFrequencies?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isPOARequired", Boolean, true)
   isPOARequired?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isRegistrationRequired", Boolean, true)
   isRegistrationRequired?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasMultiRegistrationMethods", Boolean, true)
   hasMultiRegistrationMethods?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasSchedules", Boolean, true)
   hasSchedules?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasMultiFilingMethods", Boolean, true)
   hasMultiFilingMethods?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasMultiPayMethods", Boolean, true)
   hasMultiPayMethods?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isEFTRequired", Boolean, true)
   isEFTRequired?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isFilePayMethodLinked", Boolean, true)
   isFilePayMethodLinked?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("mailingReceivedRuleId", Number, true)
   mailingReceivedRuleId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("proofOfMailingId", Number, true)
   proofOfMailingId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isNegAmountAllowed", Boolean, true)
   isNegAmountAllowed?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("allowNegativeOverallTax", Boolean, true)
   allowNegativeOverallTax?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("isNettingRequired", Boolean, true)
   isNettingRequired?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("roundingMethodId", Number, true)
   roundingMethodId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("vendorDiscountAnnualMax", Number, true)
   vendorDiscountAnnualMax?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("versionsRequireAuthorityApproval", Boolean, true)
   versionsRequireAuthorityApproval?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("outletReportingMethodId", Number, true)
   outletReportingMethodId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasReportingCodes", Boolean, true)
   hasReportingCodes?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasPrepayments", Boolean, true)
   hasPrepayments?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("grossIncludesInterstateSales", Boolean, true)
   grossIncludesInterstateSales?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("grossIncludesTax", String, true)
   grossIncludesTax?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasEfileFee", Boolean, true)
   hasEfileFee?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasEpayFee", Boolean, true)
   hasEpayFee?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("hasDependencies", Boolean, true)
   hasDependencies?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("requiredEfileTrigger", String, true)
   requiredEfileTrigger?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("requiredEftTrigger", String, true)
   requiredEftTrigger?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("vendorDiscountEfile", Boolean, true)
   vendorDiscountEfile?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("vendorDiscountPaper", Boolean, true)
   vendorDiscountPaper?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("peerReviewed", String, true)
   peerReviewed?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("peerReviewedId", String, true)
   peerReviewedId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("peerReviewedDate", String, true)
   peerReviewedDate?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddressMailTo", String, true)
   dorAddressMailTo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddress1", String, true)
   dorAddress1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddress2", String, true)
   dorAddress2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddressCity", String, true)
   dorAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddressRegion", String, true)
   dorAddressRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddressPostalCode", String, true)
   dorAddressPostalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorAddressCountry", String, true)
   dorAddressCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddressMailTo", String, true)
   zeroAddressMailTo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddress1", String, true)
   zeroAddress1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddress2", String, true)
   zeroAddress2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddressCity", String, true)
   zeroAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddressRegion", String, true)
   zeroAddressRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddressPostalCode", String, true)
   zeroAddressPostalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("zeroAddressCountry", String, true)
   zeroAddressCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddressMailTo", String, true)
   amendedAddressMailTo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddress1", String, true)
   amendedAddress1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddress2", String, true)
   amendedAddress2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddressCity", String, true)
   amendedAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddressRegion", String, true)
   amendedAddressRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddressPostalCode", String, true)
   amendedAddressPostalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("amendedAddressCountry", String, true)
   amendedAddressCountry?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("onlineBackFiling", Boolean, true)
   onlineBackFiling?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("onlineAmendedReturns", Boolean, true)
   onlineAmendedReturns?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("prepaymentFrequency", String, true)
   prepaymentFrequency?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("outletLocationIdentifiersRequired", Boolean, true)
   outletLocationIdentifiersRequired?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("listingSortOrder", String, true)
   listingSortOrder?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorWebsite", String, true)
   dorWebsite?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("fileForAllOutlets", Boolean, true)
   fileForAllOutlets?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("paperFormsDoNotHaveDiscounts", Boolean, true)
   paperFormsDoNotHaveDiscounts?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("stackAggregation", Boolean, true)
   stackAggregation?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("roundingPrecision", String, true)
   roundingPrecision?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("inconsistencyTolerance", String, true)
   inconsistencyTolerance?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("visibleToCustomers", Boolean, true)
   visibleToCustomers?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("requiresOutletSetup", Boolean, true)
   requiresOutletSetup?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("achCreditAllowed", Boolean, true)
   achCreditAllowed?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("reportLevel", String, true)
   reportLevel?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("postOfficeValidated", Boolean, true)
   postOfficeValidated?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("stackAggregationOption", String, true)
   stackAggregationOption?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("sstBehavior", String, true)
   sstBehavior?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("nonSstBehavior", String, true)
   nonSstBehavior?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("dorPhoneNumber", String, true)
   dorPhoneNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("averageCheckClearDays", String, true)
   averageCheckClearDays?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("filterZeroRatedLineDetails", Boolean, true)
   filterZeroRatedLineDetails?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   @JsonProperty("allowsBulkFilingAccounts", Boolean, true)
   allowsBulkFilingAccounts?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("bulkAccountInstructionLink", String, true)
   bulkAccountInstructionLink?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("registrationIdFormat", String, true)
   registrationIdFormat?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("thresholdTrigger", String, true)
   thresholdTrigger?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("transactionSortingOption", String, true)
   transactionSortingOption?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   @JsonProperty("contentReviewFrequencyId", Number, true)
   contentReviewFrequencyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   @JsonProperty("aliasForFormMasterId", String, true)
   aliasForFormMasterId?: string | undefined = undefined;
 }