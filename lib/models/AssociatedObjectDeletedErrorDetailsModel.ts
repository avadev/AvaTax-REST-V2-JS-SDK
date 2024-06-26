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
 * @class AssociatedObjectDeletedErrorDetailsModel
 */
 @JsonObject("AssociatedObjectDeletedErrorDetailsModel")
 export class AssociatedObjectDeletedErrorDetailsModel {
    /**
     * @type {Enums.ErrorCodeId}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("code", Enums.ErrorCodeIdConverter, true)
   code?: Enums.ErrorCodeId | undefined = undefined;
    /**
     * @type {number}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("number", Number, true)
   number?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("faultCode", String, true)
   faultCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("faultSubCode", String, true)
   faultSubCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("helpLink", String, true)
   helpLink?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("refersTo", String, true)
   refersTo?: string | undefined = undefined;
    /**
     * @type {Enums.SeverityLevel}
     * @memberof AssociatedObjectDeletedErrorDetailsModel
     */
   @JsonProperty("severity", Enums.SeverityLevelConverter, true)
   severity?: Enums.SeverityLevel | undefined = undefined;
 }