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
import { ComplianceAggregatedTaxRateModel } from "./ComplianceAggregatedTaxRateModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Model for distinct jurisdictions.
 * @export
 * @class ComplianceJurisdictionModel
 */
 @JsonObject("ComplianceJurisdictionModel")
 export class ComplianceJurisdictionModel {
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("stateAssignedCode", String, true)
   stateAssignedCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("jurisdictionTypeId", String, true)
   jurisdictionTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("taxRegionName", String, true)
   taxRegionName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {ComplianceAggregatedTaxRateModel[]}
     * @memberof ComplianceJurisdictionModel
     */
   @JsonProperty("rates", [ComplianceAggregatedTaxRateModel], true)
   rates?: ComplianceAggregatedTaxRateModel[] | undefined = undefined;
 }