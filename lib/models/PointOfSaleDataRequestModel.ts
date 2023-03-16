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
 * Point-of-Sale Data Request Model
 * @export
 * @class PointOfSaleDataRequestModel
 */
 @JsonObject("PointOfSaleDataRequestModel")
 export class PointOfSaleDataRequestModel {
    /**
     * @type {string}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("companyCode", String)
   companyCode: string = undefined;
    /**
     * @type {Date}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("documentDate", DateConverter, true)
   documentDate?: Date | undefined = undefined;
    /**
     * @type {Enums.PointOfSaleFileType}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("responseType", Enums.PointOfSaleFileTypeConverter, true)
   responseType?: Enums.PointOfSaleFileType | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("taxCodes", [String], true)
   taxCodes?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("itemCodes", [String], true)
   itemCodes?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("locationCodes", [String], true)
   locationCodes?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("includeJurisCodes", Boolean, true)
   includeJurisCodes?: boolean | undefined = undefined;
    /**
     * @type {Enums.PointOfSalePartnerId}
     * @memberof PointOfSaleDataRequestModel
     */
   @JsonProperty("partnerId", Enums.PointOfSalePartnerIdConverter, true)
   partnerId?: Enums.PointOfSalePartnerId | undefined = undefined;
 }