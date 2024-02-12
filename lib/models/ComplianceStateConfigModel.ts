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
 * A flattened model for State Config.
 * @export
 * @class ComplianceStateConfigModel
 */
 @JsonObject("ComplianceStateConfigModel")
 export class ComplianceStateConfigModel {
    /**
     * @type {number}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("stateConfigId", Number, true)
   stateConfigId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("hasBoundary", Boolean, true)
   hasBoundary?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("hasRates", Boolean, true)
   hasRates?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("isLocalAdmin", Boolean, true)
   isLocalAdmin?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("isLocalNexus", Boolean, true)
   isLocalNexus?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("isSerState", Boolean, true)
   isSerState?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("minBoundaryLevelId", Number, true)
   minBoundaryLevelId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("sstStatusId", Number, true)
   sstStatusId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("stateFips", String, true)
   stateFips?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("stateName", String, true)
   stateName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("boundaryTableBaseName", String, true)
   boundaryTableBaseName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("stjCount", Number, true)
   stjCount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("tsStateId", String, true)
   tsStateId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("isJaasEnabled", Number, true)
   isJaasEnabled?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("hasSSTBoundary", Boolean, true)
   hasSSTBoundary?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceStateConfigModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }