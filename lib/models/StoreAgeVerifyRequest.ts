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
import { AgeVerifyRequest } from "./AgeVerifyRequest";
import { AgeVerifyResult } from "./AgeVerifyResult";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The Request for the /ageverification/store/identity endpoint. Describes information about the person whose age has been verified and the verification result.
 * @export
 * @class StoreAgeVerifyRequest
 */
 @JsonObject("StoreAgeVerifyRequest")
 export class StoreAgeVerifyRequest {
    /**
     * @type {AgeVerifyRequest}
     * @memberof StoreAgeVerifyRequest
     */
   @JsonProperty("request", AgeVerifyRequest, true)
   request?: AgeVerifyRequest | undefined = undefined;
    /**
     * @type {AgeVerifyResult}
     * @memberof StoreAgeVerifyRequest
     */
   @JsonProperty("response", AgeVerifyResult, true)
   response?: AgeVerifyResult | undefined = undefined;
 }