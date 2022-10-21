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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents information about a tax form known to Avalara
 * @export
 * @interface FormMasterModel
 */
 export interface FormMasterModel {
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   formTypeId?: number;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   taxFormCode: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   legacyReturnName: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   taxFormName: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   description: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isEffective?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   authorityName: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   shortCode: string;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   dueDay?: number;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   delinquentDay?: number;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   fiscalYearStartMonth?: number;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasMultiFrequencies?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isPOARequired?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isRegistrationRequired?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasMultiRegistrationMethods?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasSchedules?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasMultiFilingMethods?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasMultiPayMethods?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isEFTRequired?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isFilePayMethodLinked?: boolean;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   mailingReceivedRuleId?: number;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   proofOfMailingId?: number;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isNegAmountAllowed?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   allowNegativeOverallTax?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   isNettingRequired?: boolean;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   roundingMethodId?: number;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   vendorDiscountAnnualMax?: number;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   versionsRequireAuthorityApproval?: boolean;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   outletReportingMethodId?: number;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasReportingCodes?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasPrepayments?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   grossIncludesInterstateSales?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   grossIncludesTax: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasEfileFee?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasEpayFee?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   hasDependencies?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   requiredEfileTrigger: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   requiredEftTrigger: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   vendorDiscountEfile?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   vendorDiscountPaper?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   peerReviewed: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   peerReviewedId: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   peerReviewedDate: string;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   modifiedUserId?: number;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   modifiedDate?: Date;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddressMailTo: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddress1: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddress2: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddressCity: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddressRegion: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddressPostalCode: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorAddressCountry: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddressMailTo: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddress1: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddress2: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddressCity: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddressRegion: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddressPostalCode: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   zeroAddressCountry: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddressMailTo: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddress1: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddress2: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddressCity: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddressRegion: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddressPostalCode: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   amendedAddressCountry: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   onlineBackFiling?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   onlineAmendedReturns?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   prepaymentFrequency: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   outletLocationIdentifiersRequired?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   listingSortOrder: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorWebsite: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   fileForAllOutlets?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   paperFormsDoNotHaveDiscounts?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   stackAggregation?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   roundingPrecision: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   inconsistencyTolerance: string;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   effDate?: Date;
    /**
     * @type {Date}
     * @memberof FormMasterModel
     */
   endDate?: Date;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   visibleToCustomers?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   requiresOutletSetup?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   achCreditAllowed?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   reportLevel: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   postOfficeValidated?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   stackAggregationOption: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   sstBehavior: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   nonSstBehavior: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   dorPhoneNumber: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   averageCheckClearDays: string;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   filterZeroRatedLineDetails?: boolean;
    /**
     * @type {boolean}
     * @memberof FormMasterModel
     */
   allowsBulkFilingAccounts?: boolean;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   bulkAccountInstructionLink: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   registrationIdFormat: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   thresholdTrigger: string;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   transactionSortingOption: string;
    /**
     * @type {number}
     * @memberof FormMasterModel
     */
   contentReviewFrequencyId?: number;
    /**
     * @type {string}
     * @memberof FormMasterModel
     */
   aliasForFormMasterId: string;
 }