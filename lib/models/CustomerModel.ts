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
import { CustomerAttributeModel } from "./CustomerAttributeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a customer to whom you sell products and/or services.
 * @export
 * @class CustomerModel
 */
 @JsonObject("CustomerModel")
 export class CustomerModel {
    /**
     * @type {number}
     * @memberof CustomerModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("customerCode", String)
   customerCode: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("alternateId", String, true)
   alternateId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("attnName", String, true)
   attnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("line1", String)
   line1: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("city", String)
   city: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("postalCode", String)
   postalCode: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("phoneNumber", String, true)
   phoneNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("faxNumber", String, true)
   faxNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("emailAddress", String, true)
   emailAddress?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("contactName", String, true)
   contactName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   @JsonProperty("lastTransaction", DateConverter, true)
   lastTransaction?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerModel
     */
   @JsonProperty("isBill", Boolean, true)
   isBill?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerModel
     */
   @JsonProperty("isShip", Boolean, true)
   isShip?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   @JsonProperty("taxpayerIdNumber", String, true)
   taxpayerIdNumber?: string | undefined = undefined;
    /**
     * @type {CertificateModel[]}
     * @memberof CustomerModel
     */
   @JsonProperty("certificates", [CertificateModel], true)
   certificates?: CertificateModel[] | undefined = undefined;
    /**
     * @type {CustomFieldModel[]}
     * @memberof CustomerModel
     */
   @JsonProperty("customFields", [CustomFieldModel], true)
   customFields?: CustomFieldModel[] | undefined = undefined;
    /**
     * @type {ExposureZoneModel[]}
     * @memberof CustomerModel
     */
   @JsonProperty("exposureZones", [ExposureZoneModel], true)
   exposureZones?: ExposureZoneModel[] | undefined = undefined;
    /**
     * @type {CustomerModel[]}
     * @memberof CustomerModel
     */
   @JsonProperty("shipTos", [CustomerModel], true)
   shipTos?: CustomerModel[] | undefined = undefined;
    /**
     * @type {CustomerAttributeModel[]}
     * @memberof CustomerModel
     */
   @JsonProperty("attributes", [CustomerAttributeModel], true)
   attributes?: CustomerAttributeModel[] | undefined = undefined;
 }