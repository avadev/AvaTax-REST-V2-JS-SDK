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
 * This is used to map the error details in response
 * @export
 * @class NotFoundErrorResponse
 */
 @JsonObject("NotFoundErrorResponse")
 export class NotFoundErrorResponse {
    /**
     * @type {number}
     * @memberof NotFoundErrorResponse
     */
   @JsonProperty("code", Number, true)
   code?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NotFoundErrorResponse
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
 }