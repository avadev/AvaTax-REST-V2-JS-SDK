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
 * Represents a verification request using Skyscraper for a company
 * @export
 * @class LoginVerificationInputModel
 */
 @JsonObject("LoginVerificationInputModel")
 export class LoginVerificationInputModel {
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("username", String)
   username: string = undefined;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("password", String)
   password: string = undefined;
    /**
     * @type {object}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("additionalOptions", Object, true)
   additionalOptions?: object | undefined = undefined;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("bulkRequestId", Number, true)
   bulkRequestId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   @JsonProperty("priority", Number, true)
   priority?: number | undefined = undefined;
 }