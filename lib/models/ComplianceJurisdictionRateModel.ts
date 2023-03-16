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
 * A flattened model for jurisdictions and rates.
 * @export
 * @class ComplianceJurisdictionRateModel
 */
 @JsonObject("ComplianceJurisdictionRateModel")
 export class ComplianceJurisdictionRateModel {
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("jurisdictionTypeId", String, true)
   jurisdictionTypeId?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("rateTypeId", String, true)
   rateTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("stateAssignedCode", String, true)
   stateAssignedCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
 }