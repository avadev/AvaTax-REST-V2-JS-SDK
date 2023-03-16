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
import { FilingAttachmentModel } from "./FilingAttachmentModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Filing Returns Model
 * @export
 * @class FilingReturnModelBasic
 */
 @JsonObject("FilingReturnModelBasic")
 export class FilingReturnModelBasic {
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filingId", Number, true)
   filingId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("resourceFileId", Number, true)
   resourceFileId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filingRegionId", Number, true)
   filingRegionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filingCalendarId", Number, true)
   filingCalendarId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("endPeriodMonth", Number, true)
   endPeriodMonth?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("endPeriodYear", Number, true)
   endPeriodYear?: number | undefined = undefined;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("status", Enums.FilingStatusIdConverter, true)
   status?: Enums.FilingStatusId | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filingFrequency", Enums.FilingFrequencyIdConverter, true)
   filingFrequency?: Enums.FilingFrequencyId | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filedDate", DateConverter, true)
   filedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("salesAmount", Number, true)
   salesAmount?: number | undefined = undefined;
    /**
     * @type {Enums.FilingTypeId}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("filingType", Enums.FilingTypeIdConverter, true)
   filingType?: Enums.FilingTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("formName", String, true)
   formName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("remitAmount", Number, true)
   remitAmount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("formCode", String, true)
   formCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("collectAmount", Number, true)
   collectAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("taxDueAmount", Number, true)
   taxDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("nonTaxableDueAmount", Number, true)
   nonTaxableDueAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("consumerUseTaxAmount", Number, true)
   consumerUseTaxAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("consumerUseNonTaxableAmount", Number, true)
   consumerUseNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("consumerUseTaxableAmount", Number, true)
   consumerUseTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("excludedSalesAmount", Number, true)
   excludedSalesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("excludedNonTaxableAmount", Number, true)
   excludedNonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("excludedTaxAmount", Number, true)
   excludedTaxAmount?: number | undefined = undefined;
    /**
     * @type {Enums.AccrualType}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("accrualType", Enums.AccrualTypeConverter, true)
   accrualType?: Enums.AccrualType | undefined = undefined;
    /**
     * @type {FilingAttachmentModel[]}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("attachments", [FilingAttachmentModel], true)
   attachments?: FilingAttachmentModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingReturnModelBasic
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }