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
 * 
 * @export
 * @class ObjectDeletedErrorModel
 */
 @JsonObject("ObjectDeletedErrorModel")
 export class ObjectDeletedErrorModel {
    /**
     * @type {Enums.ErrorCodeId}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("code", Enums.ErrorCodeIdConverter, true)
   code?: Enums.ErrorCodeId | undefined = undefined;
    /**
     * @type {number}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("number", Number, true)
   number?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("faultCode", String, true)
   faultCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("faultSubCode", String, true)
   faultSubCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("helpLink", String, true)
   helpLink?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("refersTo", String, true)
   refersTo?: string | undefined = undefined;
    /**
     * @type {Enums.SeverityLevel}
     * @memberof ObjectDeletedErrorModel
     */
   @JsonProperty("severity", Enums.SeverityLevelConverter, true)
   severity?: Enums.SeverityLevel | undefined = undefined;
 }