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
import { NoticeCommentModel } from "./NoticeCommentModel";
import { NoticeFinanceModel } from "./NoticeFinanceModel";
import { NoticeResponsibilityDetailModel } from "./NoticeResponsibilityDetailModel";
import { NoticeRootCauseDetailModel } from "./NoticeRootCauseDetailModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a letter received from a tax authority regarding tax filing.
These letters often have the warning "Notice" printed at the top, which is why
they are called "Notices".
 * @export
 * @class NoticeModel
 */
 @JsonObject("NoticeModel")
 export class NoticeModel {
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("statusId", Number)
   statusId: number = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   @JsonProperty("receivedDate", DateConverter)
   receivedDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   @JsonProperty("closedDate", DateConverter, true)
   closedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("totalRemit", Number, true)
   totalRemit?: number | undefined = undefined;
    /**
     * @type {Enums.NoticeCustomerType}
     * @memberof NoticeModel
     */
   @JsonProperty("customerTypeId", Enums.NoticeCustomerTypeConverter)
   customerTypeId: Enums.NoticeCustomerType = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof NoticeModel
     */
   @JsonProperty("filingFrequency", Enums.FilingFrequencyIdConverter, true)
   filingFrequency?: Enums.FilingFrequencyId | undefined = undefined;
    /**
     * @type {Enums.TaxNoticeFilingTypeId}
     * @memberof NoticeModel
     */
   @JsonProperty("filingTypeId", Enums.TaxNoticeFilingTypeIdConverter, true)
   filingTypeId?: Enums.TaxNoticeFilingTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("ticketReferenceNo", String, true)
   ticketReferenceNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("ticketReferenceUrl", String, true)
   ticketReferenceUrl?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("salesForceCase", String, true)
   salesForceCase?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("salesForceCaseUrl", String, true)
   salesForceCaseUrl?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("taxPeriod", String)
   taxPeriod: string = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("reasonId", Number)
   reasonId: number = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("reason", String, true)
   reason?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("typeId", Number, true)
   typeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {Enums.FundingOption}
     * @memberof NoticeModel
     */
   @JsonProperty("customerFundingOptionId", Enums.FundingOptionConverter, true)
   customerFundingOptionId?: Enums.FundingOption | undefined = undefined;
    /**
     * @type {Enums.NoticePriorityId}
     * @memberof NoticeModel
     */
   @JsonProperty("priorityId", Enums.NoticePriorityIdConverter)
   priorityId: Enums.NoticePriorityId = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("customerComment", String, true)
   customerComment?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NoticeModel
     */
   @JsonProperty("hideFromCustomer", Boolean)
   hideFromCustomer: boolean = undefined;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   @JsonProperty("expectedResolutionDate", DateConverter, true)
   expectedResolutionDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NoticeModel
     */
   @JsonProperty("showResolutionDateToCustomer", Boolean)
   showResolutionDateToCustomer: boolean = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("closedByUserId", Number, true)
   closedByUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("createdByUserName", String, true)
   createdByUserName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("modifiedUserName", String, true)
   modifiedUserName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("closedByUserName", String, true)
   closedByUserName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("ownedByUserId", Number, true)
   ownedByUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("revenueContactId", Number, true)
   revenueContactId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("complianceContactId", Number, true)
   complianceContactId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("taxFormCode", String)
   taxFormCode: string = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("documentReference", String, true)
   documentReference?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("jurisdictionName", String, true)
   jurisdictionName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("jurisdictionType", String, true)
   jurisdictionType?: string | undefined = undefined;
    /**
     * @type {NoticeCommentModel[]}
     * @memberof NoticeModel
     */
   @JsonProperty("comments", [NoticeCommentModel], true)
   comments?: NoticeCommentModel[] | undefined = undefined;
    /**
     * @type {NoticeFinanceModel[]}
     * @memberof NoticeModel
     */
   @JsonProperty("finances", [NoticeFinanceModel], true)
   finances?: NoticeFinanceModel[] | undefined = undefined;
    /**
     * @type {NoticeResponsibilityDetailModel[]}
     * @memberof NoticeModel
     */
   @JsonProperty("responsibility", [NoticeResponsibilityDetailModel], true)
   responsibility?: NoticeResponsibilityDetailModel[] | undefined = undefined;
    /**
     * @type {NoticeRootCauseDetailModel[]}
     * @memberof NoticeModel
     */
   @JsonProperty("rootCause", [NoticeRootCauseDetailModel], true)
   rootCause?: NoticeRootCauseDetailModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeModel
     */
   @JsonProperty("registrationId", String, true)
   registrationId?: string | undefined = undefined;
 }