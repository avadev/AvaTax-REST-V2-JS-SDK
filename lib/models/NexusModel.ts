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
import { NexusParameterDetailModel } from "./NexusParameterDetailModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a declaration of nexus within a particular taxing jurisdiction.
            
To create a nexus declaration for your company, you must first call the Definitions API `ListNexus` to obtain a
list of Avalara-defined nexus.  Once you have determined which nexus you wish to declare, you should customize
only the user-selectable fields in this object.
            
The user selectable fields for the nexus object are `companyId`, `effectiveDate`, `endDate`, `localNexusTypeId`,
`taxId`, `nexusTypeId`, `hasPermanentEstablishment`, and `isSellerImporterOfRecord`.
            
When calling `CreateNexus` or `UpdateNexus`, all values in your nexus object except for the user-selectable fields
must match an Avalara-defined system nexus object.  You can retrieve a list of Avalara-defined system nexus objects
by calling `ListNexus`.  If any data does not match, AvaTax may not recognize your nexus declaration.
 * @export
 * @class NexusModel
 */
 @JsonObject("NexusModel")
 export class NexusModel {
    /**
     * @type {number}
     * @memberof NexusModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof NexusModel
     */
   @JsonProperty("jurisTypeId", Enums.JurisTypeIdConverter, true)
   jurisTypeId?: Enums.JurisTypeId | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof NexusModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("jurisCode", String)
   jurisCode: string = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("jurisName", String)
   jurisName: string = undefined;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("shortName", String, true)
   shortName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("signatureCode", String, true)
   signatureCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("stateAssignedNo", String, true)
   stateAssignedNo?: string | undefined = undefined;
    /**
     * @type {Enums.NexusTypeId}
     * @memberof NexusModel
     */
   @JsonProperty("nexusTypeId", Enums.NexusTypeIdConverter, true)
   nexusTypeId?: Enums.NexusTypeId | undefined = undefined;
    /**
     * @type {Enums.Sourcing}
     * @memberof NexusModel
     */
   @JsonProperty("sourcing", Enums.SourcingConverter, true)
   sourcing?: Enums.Sourcing | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("hasLocalNexus", Boolean, true)
   hasLocalNexus?: boolean | undefined = undefined;
    /**
     * @type {Enums.LocalNexusTypeId}
     * @memberof NexusModel
     */
   @JsonProperty("localNexusTypeId", Enums.LocalNexusTypeIdConverter, true)
   localNexusTypeId?: Enums.LocalNexusTypeId | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("hasPermanentEstablishment", Boolean, true)
   hasPermanentEstablishment?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("taxId", String, true)
   taxId?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("streamlinedSalesTax", Boolean, true)
   streamlinedSalesTax?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("isSSTActive", Boolean, true)
   isSSTActive?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("nexusTaxTypeGroup", String, true)
   nexusTaxTypeGroup?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("isSellerImporterOfRecord", Boolean, true)
   isSellerImporterOfRecord?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {NexusParameterDetailModel[]}
     * @memberof NexusModel
     */
   @JsonProperty("parameters", [NexusParameterDetailModel], true)
   parameters?: NexusParameterDetailModel[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusModel
     */
   @JsonProperty("taxableNexus", Boolean, true)
   taxableNexus?: boolean | undefined = undefined;
 }