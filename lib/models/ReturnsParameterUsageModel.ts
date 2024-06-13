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
 * usage of system defined parameters for returns.
 * @export
 * @class ReturnsParameterUsageModel
 */
 @JsonObject("ReturnsParameterUsageModel")
 export class ReturnsParameterUsageModel {
    /**
     * @type {number}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("parameterId", Number, true)
   parameterId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("productCode", String, true)
   productCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("attributeType", String, true)
   attributeType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("attributeSubType", String, true)
   attributeSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("helpUrl", String, true)
   helpUrl?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("values", [String], true)
   values?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   @JsonProperty("measurementType", String, true)
   measurementType?: string | undefined = undefined;
 }