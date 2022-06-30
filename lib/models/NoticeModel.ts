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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a letter received from a tax authority regarding tax filing.
These letters often have the warning "Notice" printed at the top, which is why
they are called "Notices".
 * @export
 * @interface NoticeModel
 */
 export interface NoticeModel {
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   companyId: number;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   statusId: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   status: string;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   receivedDate: Date;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   closedDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   totalRemit?: number;
    /**
     * @type {Enums.NoticeCustomerType}
     * @memberof NoticeModel
     */
   customerTypeId: Enums.NoticeCustomerType;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   region: string;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   taxAuthorityId?: number;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof NoticeModel
     */
   filingFrequency?: Enums.FilingFrequencyId;
    /**
     * @type {Enums.TaxNoticeFilingTypeId}
     * @memberof NoticeModel
     */
   filingTypeId?: Enums.TaxNoticeFilingTypeId;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   ticketReferenceNo: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   ticketReferenceUrl: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   salesForceCase: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   salesForceCaseUrl: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   taxPeriod: string;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   reasonId: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   reason: string;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   typeId?: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   type: string;
    /**
     * @type {Enums.FundingOption}
     * @memberof NoticeModel
     */
   customerFundingOptionId?: Enums.FundingOption;
    /**
     * @type {Enums.NoticePriorityId}
     * @memberof NoticeModel
     */
   priorityId: Enums.NoticePriorityId;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   customerComment: string;
    /**
     * @type {boolean}
     * @memberof NoticeModel
     */
   hideFromCustomer: boolean;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   expectedResolutionDate?: Date;
    /**
     * @type {boolean}
     * @memberof NoticeModel
     */
   showResolutionDateToCustomer: boolean;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   closedByUserId?: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   createdByUserName: string;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   ownedByUserId?: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   description: string;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   avaFileFormId?: number;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   revenueContactId?: number;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   complianceContactId?: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   taxFormCode: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   documentReference: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   jurisdictionName: string;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   jurisdictionType: string;
    /**
     * @type {Models.NoticeCommentModel[]}
     * @memberof NoticeModel
     */
   comments: Models.NoticeCommentModel[];
    /**
     * @type {Models.NoticeFinanceModel[]}
     * @memberof NoticeModel
     */
   finances: Models.NoticeFinanceModel[];
    /**
     * @type {Models.NoticeResponsibilityDetailModel[]}
     * @memberof NoticeModel
     */
   responsibility: Models.NoticeResponsibilityDetailModel[];
    /**
     * @type {Models.NoticeRootCauseDetailModel[]}
     * @memberof NoticeModel
     */
   rootCause: Models.NoticeRootCauseDetailModel[];
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   registrationId: string;
 }