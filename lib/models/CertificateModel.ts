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
import { ExemptionReasonModel } from "./ExemptionReasonModel";
import { CustomerModel } from "./CustomerModel";
import { PoNumberModel } from "./PoNumberModel";
import { ExposureZoneModel } from "./ExposureZoneModel";
import { CertificateAttributeModel } from "./CertificateAttributeModel";
import { HistoryModel } from "./HistoryModel";
import { CustomerJobModel } from "./CustomerJobModel";
import { CertificateLogModel } from "./CertificateLogModel";
import { CertificateInvalidReasonModel } from "./CertificateInvalidReasonModel";
import { CustomFieldModel } from "./CustomFieldModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A certificate is a document stored in either AvaTax Exemptions or CertCapture.  The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate.  To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 * @export
 * @class CertificateModel
 */
 @JsonObject("CertificateModel")
 export class CertificateModel {
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   @JsonProperty("signedDate", DateConverter)
   signedDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   @JsonProperty("expirationDate", DateConverter, true)
   expirationDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("filename", String, true)
   filename?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   @JsonProperty("documentExists", Boolean, true)
   documentExists?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   @JsonProperty("valid", Boolean, true)
   valid?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   @JsonProperty("verified", Boolean, true)
   verified?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   @JsonProperty("exemptPercentage", Number, true)
   exemptPercentage?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   @JsonProperty("isSingleCertificate", Boolean, true)
   isSingleCertificate?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("exemptionNumber", String, true)
   exemptionNumber?: string | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof CertificateModel
     */
   @JsonProperty("validatedExemptionReason", ExemptionReasonModel, true)
   validatedExemptionReason?: ExemptionReasonModel | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof CertificateModel
     */
   @JsonProperty("exemptionReason", ExemptionReasonModel)
   exemptionReason: ExemptionReasonModel = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {Enums.CertificateEcmStatus}
     * @memberof CertificateModel
     */
   @JsonProperty("ecmStatus", Enums.CertificateEcmStatusConverter, true)
   ecmStatus?: Enums.CertificateEcmStatus | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("taxNumberType", String, true)
   taxNumberType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("businessNumberType", String, true)
   businessNumberType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   @JsonProperty("pageCount", Number, true)
   pageCount?: number | undefined = undefined;
    /**
     * @type {CustomerModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("customers", [CustomerModel], true)
   customers?: CustomerModel[] | undefined = undefined;
    /**
     * @type {PoNumberModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("poNumbers", [PoNumberModel], true)
   poNumbers?: PoNumberModel[] | undefined = undefined;
    /**
     * @type {ExposureZoneModel}
     * @memberof CertificateModel
     */
   @JsonProperty("exposureZone", ExposureZoneModel)
   exposureZone: ExposureZoneModel = undefined;
    /**
     * @type {CertificateAttributeModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("attributes", [CertificateAttributeModel], true)
   attributes?: CertificateAttributeModel[] | undefined = undefined;
    /**
     * @type {HistoryModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("histories", [HistoryModel], true)
   histories?: HistoryModel[] | undefined = undefined;
    /**
     * @type {CustomerJobModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("jobs", [CustomerJobModel], true)
   jobs?: CustomerJobModel[] | undefined = undefined;
    /**
     * @type {CertificateLogModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("logs", [CertificateLogModel], true)
   logs?: CertificateLogModel[] | undefined = undefined;
    /**
     * @type {CertificateInvalidReasonModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("invalidReasons", [CertificateInvalidReasonModel], true)
   invalidReasons?: CertificateInvalidReasonModel[] | undefined = undefined;
    /**
     * @type {CustomFieldModel[]}
     * @memberof CertificateModel
     */
   @JsonProperty("customFields", [CustomFieldModel], true)
   customFields?: CustomFieldModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   @JsonProperty("ecmsId", Number, true)
   ecmsId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("ecmsStatus", String, true)
   ecmsStatus?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   @JsonProperty("pdf", String, true)
   pdf?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CertificateModel
     */
   @JsonProperty("pages", [String], true)
   pages?: string[] | undefined = undefined;
 }