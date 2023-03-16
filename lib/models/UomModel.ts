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
 * The "Unit of Measurement" model captures information about a type of measurement.  Types of measurement refer to
different scales for the same dimension.  For example, measurements of type "Distance" may include units of measurement
such as meters, feet, inches, and miles.
 * @export
 * @class UomModel
 */
 @JsonObject("UomModel")
 export class UomModel {
    /**
     * @type {number}
     * @memberof UomModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("shortDesc", String, true)
   shortDesc?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof UomModel
     */
   @JsonProperty("measurementTypeId", Number, true)
   measurementTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("measurementTypeCode", String, true)
   measurementTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("siUOM", String, true)
   siUOM?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UomModel
     */
   @JsonProperty("measurementTypeDescription", String, true)
   measurementTypeDescription?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof UomModel
     */
   @JsonProperty("isSiUom", Boolean, true)
   isSiUom?: boolean | undefined = undefined;
 }