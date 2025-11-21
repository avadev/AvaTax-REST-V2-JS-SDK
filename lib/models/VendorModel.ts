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
import { CertificateModel } from "./CertificateModel";
import { CustomFieldModel } from "./CustomFieldModel";
import { ExposureZoneModel } from "./ExposureZoneModel";
import { CustomerModel } from "./CustomerModel";
import { CustomerAttributeModel } from "./CustomerAttributeModel";
import { ActiveCertificateModel } from "./ActiveCertificateModel";
import { HistoryModel } from "./HistoryModel";
import { CustomerJobModel } from "./CustomerJobModel";
import { CertificateLogModel } from "./CertificateLogModel";
import { StateModel } from "./StateModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a vendor from whom you purchase products and/or services.
This model inherits all properties from CustomerModel and adds vendor-specific functionality.
 * @export
 * @class VendorModel
 */
 @JsonObject("VendorModel")
 export class VendorModel {
    /**
     * @type {boolean}
     * @memberof VendorModel
     */
   @JsonProperty("isVendor", Boolean, true)
   isVendor?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("customerCode", String)
   customerCode: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("alternateId", String, true)
   alternateId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("attnName", String, true)
   attnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("line1", String)
   line1: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("city", String)
   city: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("postalCode", String)
   postalCode: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("phoneNumber", String, true)
   phoneNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("faxNumber", String, true)
   faxNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("emailAddress", String, true)
   emailAddress?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("contactName", String, true)
   contactName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorModel
     */
   @JsonProperty("lastTransaction", DateConverter, true)
   lastTransaction?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof VendorModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorModel
     */
   @JsonProperty("isBill", Boolean, true)
   isBill?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorModel
     */
   @JsonProperty("isShip", Boolean, true)
   isShip?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorModel
     */
   @JsonProperty("taxpayerIdNumber", String, true)
   taxpayerIdNumber?: string | undefined = undefined;
    /**
     * @type {CertificateModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("certificates", [CertificateModel], true)
   certificates?: CertificateModel[] | undefined = undefined;
    /**
     * @type {CustomFieldModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("customFields", [CustomFieldModel], true)
   customFields?: CustomFieldModel[] | undefined = undefined;
    /**
     * @type {ExposureZoneModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("exposureZones", [ExposureZoneModel], true)
   exposureZones?: ExposureZoneModel[] | undefined = undefined;
    /**
     * @type {CustomerModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("billTos", [CustomerModel], true)
   billTos?: CustomerModel[] | undefined = undefined;
    /**
     * @type {CustomerModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("shipTos", [CustomerModel], true)
   shipTos?: CustomerModel[] | undefined = undefined;
    /**
     * @type {CustomerAttributeModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("attributes", [CustomerAttributeModel], true)
   attributes?: CustomerAttributeModel[] | undefined = undefined;
    /**
     * @type {ActiveCertificateModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("activeCertificates", [ActiveCertificateModel], true)
   activeCertificates?: ActiveCertificateModel[] | undefined = undefined;
    /**
     * @type {HistoryModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("histories", [HistoryModel], true)
   histories?: HistoryModel[] | undefined = undefined;
    /**
     * @type {CustomerJobModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("jobs", [CustomerJobModel], true)
   jobs?: CustomerJobModel[] | undefined = undefined;
    /**
     * @type {CertificateLogModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("logs", [CertificateLogModel], true)
   logs?: CertificateLogModel[] | undefined = undefined;
    /**
     * @type {StateModel[]}
     * @memberof VendorModel
     */
   @JsonProperty("shipToStates", [StateModel], true)
   shipToStates?: StateModel[] | undefined = undefined;
 }