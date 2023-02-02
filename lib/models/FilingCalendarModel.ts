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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a commitment to file a tax return on a recurring basis.
Only used if you subscribe to Avalara Returns.
 * @export
 * @interface FilingCalendarModel
 */
 export interface FilingCalendarModel {
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   companyId: number;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   returnName?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   formCountry?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   formRegion?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   taxFormCode?: string;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   fiscalYearStartMonth?: number;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   locationCode?: string;
    /**
     * @type {Enums.OutletTypeId}
     * @memberof FilingCalendarModel
     */
   outletTypeId?: Enums.OutletTypeId;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   paymentCurrency?: string;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingCalendarModel
     */
   filingFrequencyId: Enums.FilingFrequencyId;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   months?: number;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   stateRegistrationId?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   localRegistrationId?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   employerIdentificationNumber?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   line1?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   postalCode?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressLine1?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressLine2?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressCity?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressRegion?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressPostalCode?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   mailingAddressCountry?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   phone?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   customerFilingInstructions?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   legalEntityName?: string;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   effectiveDate: Date;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   endDate?: Date;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingCalendarModel
     */
   filingTypeId?: Enums.FilingTypeId;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   eFileUsername?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   eFilePassword?: string;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   prepayPercentage?: number;
    /**
     * @type {boolean}
     * @memberof FilingCalendarModel
     */
   prePaymentRequired?: boolean;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   fixedPrepaymentAmount?: number;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof FilingCalendarModel
     */
   taxTypeId: Enums.MatchingTaxType;
    /**
     * @type {string[]}
     * @memberof FilingCalendarModel
     */
   taxTypes?: string[];
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   internalNotes?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   alSignOn?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   alAccessCode?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   meBusinessCode?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   iaBen?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   ctReg?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other1Name?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other1Value?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other2Name?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other2Value?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other3Name?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   other3Value?: string;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   taxAuthorityId?: number;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   taxAuthorityName?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   taxAuthorityType?: string;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   bulkAccountId?: string;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   siteCode?: string;
    /**
     * @type {Enums.BulkAccountValidationStatus}
     * @memberof FilingCalendarModel
     */
   bulkAccountValidationStatus?: Enums.BulkAccountValidationStatus;
    /**
     * @type {Models.CompanyReturnSettingModel[]}
     * @memberof FilingCalendarModel
     */
   settings?: Models.CompanyReturnSettingModel[];
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   autoLockOverrideDay?: number;
 }