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
 * Reponse model for the returns specific nexus fetch API
 * @export
 * @class NexusForReturnsModel
 */
 @JsonObject("NexusForReturnsModel")
 export class NexusForReturnsModel {
    /**
     * @type {number}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("assignedToCountryId", Number, true)
   assignedToCountryId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("nexusTaxTypeGroup", String, true)
   nexusTaxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("nexusTypeId", String, true)
   nexusTypeId?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("hasLocalNexus", Boolean, true)
   hasLocalNexus?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("localNexusType", String, true)
   localNexusType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("sstNexusId", Number, true)
   sstNexusId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("sstType", String, true)
   sstType?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("sstEffectiveDate", DateConverter, true)
   sstEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("sstEndDate", DateConverter, true)
   sstEndDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusForReturnsModel
     */
   @JsonProperty("isRemoteSeller", Boolean, true)
   isRemoteSeller?: boolean | undefined = undefined;
 }