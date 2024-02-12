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
 * Model for RateOption.
 * @export
 * @class ComplianceRateOptionModel
 */
 @JsonObject("ComplianceRateOptionModel")
 export class ComplianceRateOptionModel {
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("groupCode", String, true)
   groupCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxRegionName", String, true)
   taxRegionName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("reportLevel", String, true)
   reportLevel?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxTypeCode", String, true)
   taxTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxTypeCodeName", String, true)
   taxTypeCodeName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxSubTypeCode", String, true)
   taxSubTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxSubTypeCodeName", String, true)
   taxSubTypeCodeName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("rateTypeCodeName", String, true)
   rateTypeCodeName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("stackRate", Number, true)
   stackRate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("componentRate", Number, true)
   componentRate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("cityName", String, true)
   cityName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("countyName", String, true)
   countyName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ComplianceRateOptionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }