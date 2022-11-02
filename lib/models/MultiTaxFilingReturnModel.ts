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
 * Filing Returns Model
 * @export
 * @interface MultiTaxFilingReturnModel
 */
 export interface MultiTaxFilingReturnModel {
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   filingCalendarId?: number;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   registrationId?: string;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof MultiTaxFilingReturnModel
     */
   status?: Enums.FilingStatusId;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof MultiTaxFilingReturnModel
     */
   filingFrequency?: Enums.FilingFrequencyId;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof MultiTaxFilingReturnModel
     */
   filingType?: Enums.FilingTypeId;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   formName?: string;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   formCode?: string;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   description?: string;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   taxAuthorityId?: number;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   filedDate?: Date;
    /**
     * @type {Enums.AccrualType}
     * @memberof MultiTaxFilingReturnModel
     */
   accrualType?: Enums.AccrualType;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   startPeriod?: Date;
    /**
     * @type {Date}
     * @memberof MultiTaxFilingReturnModel
     */
   endPeriod?: Date;
    /**
     * @type {string}
     * @memberof MultiTaxFilingReturnModel
     */
   type?: string;
    /**
     * @type {Models.FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingReturnModel
     */
   returnTaxSummary: Models.FilingsTaxSummaryModel;
    /**
     * @type {Models.FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   returnTaxDetails: Models.FilingsTaxDetailsModel[];
    /**
     * @type {Models.FilingReturnCreditModel}
     * @memberof MultiTaxFilingReturnModel
     */
   excludedCarryOverCredits: Models.FilingReturnCreditModel;
    /**
     * @type {Models.FilingReturnCreditModel}
     * @memberof MultiTaxFilingReturnModel
     */
   appliedCarryOverCredits: Models.FilingReturnCreditModel;
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   totalAdjustments?: number;
    /**
     * @type {Models.FilingAdjustmentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   adjustments: Models.FilingAdjustmentModel[];
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   totalAugmentations?: number;
    /**
     * @type {Models.FilingAugmentationModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   augmentations: Models.FilingAugmentationModel[];
    /**
     * @type {number}
     * @memberof MultiTaxFilingReturnModel
     */
   totalPayments?: number;
    /**
     * @type {Models.FilingPaymentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   payments: Models.FilingPaymentModel[];
    /**
     * @type {Models.FilingAttachmentModel[]}
     * @memberof MultiTaxFilingReturnModel
     */
   attachments: Models.FilingAttachmentModel[];
 }