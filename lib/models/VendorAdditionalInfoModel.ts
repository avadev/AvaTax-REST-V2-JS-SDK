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
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents additional information for vendor
 * @export
 * @class VendorAdditionalInfoModel
 */
 @JsonObject("VendorAdditionalInfoModel")
 export class VendorAdditionalInfoModel {
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("vendorId", Number, true)
   vendorId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("costCenterId", Number, true)
   costCenterId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("costCenterCode", String, true)
   costCenterCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("itemCodeId", Number, true)
   itemCodeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("defaultTaxExemption", String, true)
   defaultTaxExemption?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromLocationId", Number, true)
   shipFromLocationId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromLocationCode", String, true)
   shipFromLocationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromAddressLine", String, true)
   shipFromAddressLine?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromAddressCity", String, true)
   shipFromAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromAddressState", String, true)
   shipFromAddressState?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromAddressZip", String, true)
   shipFromAddressZip?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipFromAddressCountry", String, true)
   shipFromAddressCountry?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToLocationId", Number, true)
   shipToLocationId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToLocationCode", String, true)
   shipToLocationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToAddressLine", String, true)
   shipToAddressLine?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToAddressCity", String, true)
   shipToAddressCity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToAddressState", String, true)
   shipToAddressState?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToAddressZip", String, true)
   shipToAddressZip?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("shipToAddressCountry", String, true)
   shipToAddressCountry?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("isTrustedVendor", Boolean, true)
   isTrustedVendor?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("isAccrual", Boolean, true)
   isAccrual?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof VendorAdditionalInfoModel
     */
   @JsonProperty("isTaxOnVendor", Boolean, true)
   isTaxOnVendor?: boolean | undefined = undefined;
 }