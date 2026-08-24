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
 * Metadata for a parameter (attribute) a UnitOfBasis uses for tax calculation, sourced from the
parameter dictionary. Provided for every attribute present in the dictionary, including
engine-derived ("Calculated") attributes such as Qty.
 * @export
 * @class ParameterMetadataModel
 */
 @JsonObject("ParameterMetadataModel")
 export class ParameterMetadataModel {
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("attributeType", String, true)
   attributeType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("measurementType", String, true)
   measurementType?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ParameterMetadataModel
     */
   @JsonProperty("isNeededForCalculation", Boolean, true)
   isNeededForCalculation?: boolean | undefined = undefined;
 }