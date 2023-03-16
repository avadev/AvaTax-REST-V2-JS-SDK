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
 * This is the output model coming from skyscraper services
 * @export
 * @class LoginVerificationOutputModel
 */
 @JsonObject("LoginVerificationOutputModel")
 export class LoginVerificationOutputModel {
    /**
     * @type {number}
     * @memberof LoginVerificationOutputModel
     */
   @JsonProperty("jobId", Number)
   jobId: number = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationOutputModel
     */
   @JsonProperty("operationStatus", String, true)
   operationStatus?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationOutputModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LoginVerificationOutputModel
     */
   @JsonProperty("loginSuccess", Boolean, true)
   loginSuccess?: boolean | undefined = undefined;
 }