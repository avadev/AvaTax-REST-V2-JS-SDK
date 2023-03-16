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
 * Represents information about a single legal taxing jurisdiction within a specific Avalara tax region.
 * @export
 * @class DenormalizedJurisModel
 */
 @JsonObject("DenormalizedJurisModel")
 export class DenormalizedJurisModel {
    /**
     * @type {Date}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("jurisType", Enums.JurisdictionTypeConverter, true)
   jurisType?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("stateAssignedCode", String, true)
   stateAssignedCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("isAcm", Boolean, true)
   isAcm?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DenormalizedJurisModel
     */
   @JsonProperty("isSst", Boolean, true)
   isSst?: boolean | undefined = undefined;
 }