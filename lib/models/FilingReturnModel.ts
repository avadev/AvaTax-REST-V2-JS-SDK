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
 * @version    22.7.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Filing Returns Model
 * @export
 * @interface FilingReturnModel
 */
 export interface FilingReturnModel {
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   filingRegionId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   filingCalendarId?: number;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   registrationId: string;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   resourceFileId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxAuthorityId?: number;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingReturnModel
     */
   status?: Enums.FilingStatusId;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingReturnModel
     */
   filingFrequency?: Enums.FilingFrequencyId;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   filedDate?: Date;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   startPeriod?: Date;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   endPeriod?: Date;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   salesAmount?: number;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingReturnModel
     */
   filingType?: Enums.FilingTypeId;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   formName: string;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   remitAmount?: number;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   formCode: string;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   description: string;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   collectAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   nonTaxableDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseTaxDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   totalAdjustments?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   excludedSalesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   excludedNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   excludedTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   carryOverSalesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   carryOverNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   carryOverTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   carryOverConsumerUseTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   salesAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   nonTaxableAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   taxableAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   salesTaxAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   sellersUseTaxAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseTaxAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseTaxableAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   consumerUseNonTaxableAccrualAmount?: number;
    /**
     * @type {Models.FilingAdjustmentModel[]}
     * @memberof FilingReturnModel
     */
   adjustments: Models.FilingAdjustmentModel[];
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   totalAugmentations?: number;
    /**
     * @type {Models.FilingAugmentationModel[]}
     * @memberof FilingReturnModel
     */
   augmentations: Models.FilingAugmentationModel[];
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   totalPayments?: number;
    /**
     * @type {Models.FilingPaymentModel[]}
     * @memberof FilingReturnModel
     */
   payments: Models.FilingPaymentModel[];
    /**
     * @type {Enums.AccrualType}
     * @memberof FilingReturnModel
     */
   accrualType?: Enums.AccrualType;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   month?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   year?: number;
    /**
     * @type {string}
     * @memberof FilingReturnModel
     */
   type: string;
    /**
     * @type {Models.FilingAttachmentModel[]}
     * @memberof FilingReturnModel
     */
   attachments: Models.FilingAttachmentModel[];
    /**
     * @type {Models.FilingReturnCreditModel}
     * @memberof FilingReturnModel
     */
   excludedCarryOverCredits: Models.FilingReturnCreditModel;
    /**
     * @type {Models.FilingReturnCreditModel}
     * @memberof FilingReturnModel
     */
   appliedCarryOverCredits: Models.FilingReturnCreditModel;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingReturnModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingReturnModel
     */
   modifiedDate?: Date;
 }