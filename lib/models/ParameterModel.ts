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
 * An extra property that can change the behavior of tax transactions.
 * @export
 * @class ParameterModel
 */
 @JsonObject("ParameterModel")
 export class ParameterModel {
    /**
     * @type {number}
     * @memberof ParameterModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ParameterModel
     */
   @JsonProperty("serviceTypes", [String], true)
   serviceTypes?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("prompt", String, true)
   prompt?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("regularExpression", String, true)
   regularExpression?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("helpUrl", String, true)
   helpUrl?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("attributeType", String, true)
   attributeType?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ParameterModel
     */
   @JsonProperty("values", [String], true)
   values?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   @JsonProperty("measurementType", String, true)
   measurementType?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   @JsonProperty("isNeededForCalculation", Boolean, true)
   isNeededForCalculation?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   @JsonProperty("isNeededForReturns", Boolean, true)
   isNeededForReturns?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   @JsonProperty("isNeededForClassification", Boolean, true)
   isNeededForClassification?: boolean | undefined = undefined;
 }