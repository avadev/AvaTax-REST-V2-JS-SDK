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
 * The Request for the /ageVerification/verify endpoint. Describes information about the person whose age is being verified.
 * @export
 * @class AgeVerifyRequest
 */
 @JsonObject("AgeVerifyRequest")
 export class AgeVerifyRequest {
    /**
     * @type {string}
     * @memberof AgeVerifyRequest
     */
   @JsonProperty("firstName", String, true)
   firstName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AgeVerifyRequest
     */
   @JsonProperty("lastName", String, true)
   lastName?: string | undefined = undefined;
    /**
     * @type {object}
     * @memberof AgeVerifyRequest
     */
   @JsonProperty("address", Object, true)
   address?: object | undefined = undefined;
    /**
     * @type {string}
     * @memberof AgeVerifyRequest
     */
   @JsonProperty("DOB", String, true)
   DOB?: string | undefined = undefined;
 }