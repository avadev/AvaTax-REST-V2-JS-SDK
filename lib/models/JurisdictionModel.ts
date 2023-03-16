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
 * Represents information about a single legal taxing jurisdiction
 * @export
 * @class JurisdictionModel
 */
 @JsonObject("JurisdictionModel")
 export class JurisdictionModel {
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("code", String)
   code: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof JurisdictionModel
     */
   @JsonProperty("type", Enums.JurisdictionTypeConverter)
   type: Enums.JurisdictionType = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   @JsonProperty("salesRate", Number, true)
   salesRate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("signatureCode", String)
   signatureCode: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   @JsonProperty("useRate", Number, true)
   useRate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("shortName", String, true)
   shortName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("stateFips", String, true)
   stateFips?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("countyFips", String, true)
   countyFips?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   @JsonProperty("placeFips", String, true)
   placeFips?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }