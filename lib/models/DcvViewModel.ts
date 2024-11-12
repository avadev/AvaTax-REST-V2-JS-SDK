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
import { Context } from "./Context";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * ViewModel to get Domain control verification
 * @export
 * @class DcvViewModel
 */
 @JsonObject("DcvViewModel")
 export class DcvViewModel {
    /**
     * @type {string}
     * @memberof DcvViewModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DcvViewModel
     */
   @JsonProperty("domainName", String, true)
   domainName?: string | undefined = undefined;
    /**
     * @type {Context}
     * @memberof DcvViewModel
     */
   @JsonProperty("context", Context, true)
   context?: Context | undefined = undefined;
    /**
     * @type {string}
     * @memberof DcvViewModel
     */
   @JsonProperty("token", String, true)
   token?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DcvViewModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DcvViewModel
     */
   @JsonProperty("emailId", String, true)
   emailId?: string | undefined = undefined;
 }