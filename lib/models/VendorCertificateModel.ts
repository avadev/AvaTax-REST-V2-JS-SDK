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
 * Represents a certificate document for vendors.
This model inherits all properties from CertificateModel and adds vendor-specific functionality.
 * @export
 * @class VendorCertificateModel
 */
 @JsonObject("VendorCertificateModel")
 export class VendorCertificateModel {
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("documentTypeId", Number, true)
   documentTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("documentTypeName", String, true)
   documentTypeName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("documentTypeDescription", String, true)
   documentTypeDescription?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("documentTypeOutgoing", Boolean, true)
   documentTypeOutgoing?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("signedDate", DateConverter)
   signedDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("expirationDate", DateConverter, true)
   expirationDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("filename", String, true)
   filename?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("documentExists", Boolean, true)
   documentExists?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("valid", Boolean, true)
   valid?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("verified", Boolean, true)
   verified?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("exemptPercentage", Number, true)
   exemptPercentage?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("isSingleCertificate", Boolean, true)
   isSingleCertificate?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("exemptionNumber", String, true)
   exemptionNumber?: string | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("validatedExemptionReason", ExemptionReasonModel, true)
   validatedExemptionReason?: ExemptionReasonModel | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("exemptionReason", ExemptionReasonModel)
   exemptionReason: ExemptionReasonModel = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {Enums.CertificateEcmStatus}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("ecmStatus", Enums.CertificateEcmStatusConverter, true)
   ecmStatus?: Enums.CertificateEcmStatus | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("taxNumberType", String, true)
   taxNumberType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("businessNumberType", String, true)
   businessNumberType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("pageCount", Number, true)
   pageCount?: number | undefined = undefined;
    /**
     * @type {CustomerModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("customers", [CustomerModel], true)
   customers?: CustomerModel[] | undefined = undefined;
    /**
     * @type {PoNumberModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("poNumbers", [PoNumberModel], true)
   poNumbers?: PoNumberModel[] | undefined = undefined;
    /**
     * @type {ExposureZoneModel}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("exposureZone", ExposureZoneModel)
   exposureZone: ExposureZoneModel = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("exposureZoneName", String, true)
   exposureZoneName?: string | undefined = undefined;
    /**
     * @type {CertificateAttributeModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("attributes", [CertificateAttributeModel], true)
   attributes?: CertificateAttributeModel[] | undefined = undefined;
    /**
     * @type {HistoryModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("histories", [HistoryModel], true)
   histories?: HistoryModel[] | undefined = undefined;
    /**
     * @type {CustomerJobModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("jobs", [CustomerJobModel], true)
   jobs?: CustomerJobModel[] | undefined = undefined;
    /**
     * @type {CertificateLogModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("logs", [CertificateLogModel], true)
   logs?: CertificateLogModel[] | undefined = undefined;
    /**
     * @type {CertificateInvalidReasonModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("invalidReasons", [CertificateInvalidReasonModel], true)
   invalidReasons?: CertificateInvalidReasonModel[] | undefined = undefined;
    /**
     * @type {CustomFieldModel[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("customFields", [CustomFieldModel], true)
   customFields?: CustomFieldModel[] | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("ecmsId", Number, true)
   ecmsId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("ecmsStatus", String, true)
   ecmsStatus?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("pdf", String, true)
   pdf?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof VendorCertificateModel
     */
   @JsonProperty("pages", [String], true)
   pages?: string[] | undefined = undefined;
 }