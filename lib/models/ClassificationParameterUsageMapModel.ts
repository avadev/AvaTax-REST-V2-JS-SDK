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
 * @class ClassificationParameterUsageMapModel
 */
 @JsonObject("ClassificationParameterUsageMapModel")
 export class ClassificationParameterUsageMapModel {
    /**
     * @type {number}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("parameterId", Number, true)
   parameterId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("taxTypeGroupId", String, true)
   taxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {Enums.Visibility}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("visibility", Enums.VisibilityConverter, true)
   visibility?: Enums.Visibility | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("attributeType", String, true)
   attributeType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("helpUrl", String, true)
   helpUrl?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("values", [String], true)
   values?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   @JsonProperty("measurementType", String, true)
   measurementType?: string | undefined = undefined;
 }