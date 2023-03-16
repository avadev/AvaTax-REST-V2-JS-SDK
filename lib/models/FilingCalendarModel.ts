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
import { CompanyReturnSettingModel } from "./CompanyReturnSettingModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a commitment to file a tax return on a recurring basis.
Only used if you subscribe to Avalara Returns.
 * @export
 * @class FilingCalendarModel
 */
 @JsonObject("FilingCalendarModel")
 export class FilingCalendarModel {
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("returnName", String, true)
   returnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("formCountry", String, true)
   formCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("formRegion", String, true)
   formRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("fiscalYearStartMonth", Number, true)
   fiscalYearStartMonth?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("locationCode", String, true)
   locationCode?: string | undefined = undefined;
    /**
     * @type {Enums.OutletTypeId}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("outletTypeId", Enums.OutletTypeIdConverter, true)
   outletTypeId?: Enums.OutletTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("paymentCurrency", String, true)
   paymentCurrency?: string | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("filingFrequencyId", Enums.FilingFrequencyIdConverter)
   filingFrequencyId: Enums.FilingFrequencyId = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("months", Number, true)
   months?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("stateRegistrationId", String, true)
   stateRegistrationId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("localRegistrationId", String, true)
   localRegistrationId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("employerIdentificationNumber", String, true)
   employerIdentificationNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressLine1", String, true)
   mailingAddressLine1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressLine2", String, true)
   mailingAddressLine2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressCity", String, true)
   mailingAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressRegion", String, true)
   mailingAddressRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressPostalCode", String, true)
   mailingAddressPostalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("mailingAddressCountry", String, true)
   mailingAddressCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("phone", String, true)
   phone?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("customerFilingInstructions", String, true)
   customerFilingInstructions?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("legalEntityName", String, true)
   legalEntityName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("effectiveDate", DateConverter)
   effectiveDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("filingTypeId", Enums.FilingTypeIdConverter, true)
   filingTypeId?: Enums.FilingTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("eFileUsername", String, true)
   eFileUsername?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("eFilePassword", String, true)
   eFilePassword?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("prepayPercentage", Number, true)
   prepayPercentage?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("prePaymentRequired", Boolean, true)
   prePaymentRequired?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("fixedPrepaymentAmount", Number, true)
   fixedPrepaymentAmount?: number | undefined = undefined;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxTypeId", Enums.MatchingTaxTypeConverter)
   taxTypeId: Enums.MatchingTaxType = undefined;
    /**
     * @type {string[]}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxTypes", [String], true)
   taxTypes?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("internalNotes", String, true)
   internalNotes?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("alSignOn", String, true)
   alSignOn?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("alAccessCode", String, true)
   alAccessCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("meBusinessCode", String, true)
   meBusinessCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("iaBen", String, true)
   iaBen?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("ctReg", String, true)
   ctReg?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other1Name", String, true)
   other1Name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other1Value", String, true)
   other1Value?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other2Name", String, true)
   other2Name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other2Value", String, true)
   other2Value?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other3Name", String, true)
   other3Name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("other3Value", String, true)
   other3Value?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxAuthorityName", String, true)
   taxAuthorityName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("taxAuthorityType", String, true)
   taxAuthorityType?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("bulkAccountId", String, true)
   bulkAccountId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("siteCode", String, true)
   siteCode?: string | undefined = undefined;
    /**
     * @type {Enums.BulkAccountValidationStatus}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("bulkAccountValidationStatus", Enums.BulkAccountValidationStatusConverter, true)
   bulkAccountValidationStatus?: Enums.BulkAccountValidationStatus | undefined = undefined;
    /**
     * @type {CompanyReturnSettingModel[]}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("settings", [CompanyReturnSettingModel], true)
   settings?: CompanyReturnSettingModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarModel
     */
   @JsonProperty("autoLockOverrideDay", Number, true)
   autoLockOverrideDay?: number | undefined = undefined;
 }