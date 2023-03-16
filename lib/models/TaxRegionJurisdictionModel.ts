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
 * The tax region jurisdiction model.
 * @export
 * @class TaxRegionJurisdictionModel
 */
 @JsonObject("TaxRegionJurisdictionModel")
 export class TaxRegionJurisdictionModel {
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("jurisdictionLevelId", Number, true)
   jurisdictionLevelId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("rockName", String, true)
   rockName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("reportLevel", Number, true)
   reportLevel?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("stateAssignedCode", String, true)
   stateAssignedCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("signatureCode", String, true)
   signatureCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRegionJurisdictionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }