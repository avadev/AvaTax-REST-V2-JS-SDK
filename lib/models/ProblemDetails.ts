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
 * @class ProblemDetails
 */
 @JsonObject("ProblemDetails")
 export class ProblemDetails {
    /**
     * @type {string}
     * @memberof ProblemDetails
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProblemDetails
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ProblemDetails
     */
   @JsonProperty("status", Number, true)
   status?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProblemDetails
     */
   @JsonProperty("detail", String, true)
   detail?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProblemDetails
     */
   @JsonProperty("instance", String, true)
   instance?: string | undefined = undefined;
 }