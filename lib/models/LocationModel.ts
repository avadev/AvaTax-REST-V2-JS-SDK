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
import { LocationSettingModel } from "./LocationSettingModel";
import { LocationParameterModel } from "./LocationParameterModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A location where this company does business.
Some jurisdictions may require you to list all locations where your company does business.
 * @export
 * @class LocationModel
 */
 @JsonObject("LocationModel")
 export class LocationModel {
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("locationCode", String)
   locationCode: string = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Enums.AddressTypeId}
     * @memberof LocationModel
     */
   @JsonProperty("addressTypeId", Enums.AddressTypeIdConverter)
   addressTypeId: Enums.AddressTypeId = undefined;
    /**
     * @type {Enums.AddressCategoryId}
     * @memberof LocationModel
     */
   @JsonProperty("addressCategoryId", Enums.AddressCategoryIdConverter)
   addressCategoryId: Enums.AddressCategoryId = undefined;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   @JsonProperty("isMarketplaceOutsideUsa", Boolean, true)
   isMarketplaceOutsideUsa?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("latitude", Number, true)
   latitude?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("longitude", Number, true)
   longitude?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   @JsonProperty("isDefault", Boolean, true)
   isDefault?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   @JsonProperty("isRegistered", Boolean, true)
   isRegistered?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("dbaName", String, true)
   dbaName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   @JsonProperty("outletName", String, true)
   outletName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("lastTransactionDate", DateConverter, true)
   lastTransactionDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("registeredDate", DateConverter, true)
   registeredDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {LocationSettingModel[]}
     * @memberof LocationModel
     */
   @JsonProperty("settings", [LocationSettingModel], true)
   settings?: LocationSettingModel[] | undefined = undefined;
    /**
     * @type {LocationParameterModel[]}
     * @memberof LocationModel
     */
   @JsonProperty("parameters", [LocationParameterModel], true)
   parameters?: LocationParameterModel[] | undefined = undefined;
 }