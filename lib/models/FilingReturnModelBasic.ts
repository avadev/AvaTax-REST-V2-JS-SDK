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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Filing Returns Model
 * @export
 * @interface FilingReturnModelBasic
 */
 export interface FilingReturnModelBasic {
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   filingId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   resourceFileId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   filingRegionId?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   filingCalendarId?: number;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   country?: string;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   region?: string;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   endPeriodMonth?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   endPeriodYear?: number;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingReturnModelBasic
     */
   status?: Enums.FilingStatusId;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingReturnModelBasic
     */
   filingFrequency?: Enums.FilingFrequencyId;
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   filedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   salesAmount?: number;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingReturnModelBasic
     */
   filingType?: Enums.FilingTypeId;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   formName?: string;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   remitAmount?: number;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   formCode?: string;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   description?: string;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   taxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   collectAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   taxDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   nonTaxableDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   consumerUseTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   consumerUseNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   consumerUseTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   excludedSalesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   excludedNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   excludedTaxAmount?: number;
    /**
     * @type {Enums.AccrualType}
     * @memberof FilingReturnModelBasic
     */
   accrualType?: Enums.AccrualType;
    /**
     * @type {Models.FilingAttachmentModel[]}
     * @memberof FilingReturnModelBasic
     */
   attachments: Models.FilingAttachmentModel[];
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   modifiedDate?: Date;
 }