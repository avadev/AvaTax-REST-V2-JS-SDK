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
import { JurisdictionModel } from "./JurisdictionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents an override of tax jurisdictions for a specific address.
            
During the time period represented by EffDate through EndDate, all tax decisions for addresses matching
this override object will be assigned to the list of jurisdictions designated in this object.
 * @export
 * @class JurisdictionOverrideModel
 */
 @JsonObject("JurisdictionOverrideModel")
 export class JurisdictionOverrideModel {
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("postalCode", String)
   postalCode: string = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {JurisdictionModel[]}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("jurisdictions", [JurisdictionModel])
   jurisdictions: JurisdictionModel[] = undefined;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("taxRegionId", Number)
   taxRegionId: number = undefined;
    /**
     * @type {Enums.BoundaryLevel}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("boundaryLevel", Enums.BoundaryLevelConverter, true)
   boundaryLevel?: Enums.BoundaryLevel | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof JurisdictionOverrideModel
     */
   @JsonProperty("isDefault", Boolean, true)
   isDefault?: boolean | undefined = undefined;
 }