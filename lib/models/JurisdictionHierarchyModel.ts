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
import { JurisdictionNexusModel } from "./JurisdictionNexusModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents information about a single legal taxing jurisdiction with parent jurisdiction
 * @export
 * @class JurisdictionHierarchyModel
 */
 @JsonObject("JurisdictionHierarchyModel")
 export class JurisdictionHierarchyModel {
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("parentId", Number, true)
   parentId?: number | undefined = undefined;
    /**
     * @type {JurisdictionNexusModel[]}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("nexus", [JurisdictionNexusModel], true)
   nexus?: JurisdictionNexusModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("code", String)
   code: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("type", Enums.JurisdictionTypeConverter)
   type: Enums.JurisdictionType = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("salesRate", Number, true)
   salesRate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("signatureCode", String)
   signatureCode: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("useRate", Number, true)
   useRate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("shortName", String, true)
   shortName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("stateFips", String, true)
   stateFips?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("countyFips", String, true)
   countyFips?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("placeFips", String, true)
   placeFips?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("isAcm", Boolean, true)
   isAcm?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("isSst", Boolean, true)
   isSst?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("createDate", DateConverter, true)
   createDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("isLocalAdmin", Boolean, true)
   isLocalAdmin?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionHierarchyModel
     */
   @JsonProperty("taxAuthorityTypeId", Number, true)
   taxAuthorityTypeId?: number | undefined = undefined;
 }