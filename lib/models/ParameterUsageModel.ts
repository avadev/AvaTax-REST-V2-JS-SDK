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
 * usage of system defined parameters.
 * @export
 * @class ParameterUsageModel
 */
 @JsonObject("ParameterUsageModel")
 export class ParameterUsageModel {
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("parameterId", Number, true)
   parameterId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("productCode", String, true)
   productCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("systemId", Number, true)
   systemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("attributeType", String, true)
   attributeType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("attributeSubType", String, true)
   attributeSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("helpUrl", String, true)
   helpUrl?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("values", [String], true)
   values?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("valueDescriptions", [String], true)
   valueDescriptions?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   @JsonProperty("measurementType", String, true)
   measurementType?: string | undefined = undefined;
 }