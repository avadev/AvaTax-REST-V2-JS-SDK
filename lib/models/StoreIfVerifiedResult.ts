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
 * The Result of a call to the /ageVerification/store/identity/storeIfVerified endpoint.
 * @export
 * @class StoreIfVerifiedResult
 */
 @JsonObject("StoreIfVerifiedResult")
 export class StoreIfVerifiedResult {
    /**
     * @type {boolean}
     * @memberof StoreIfVerifiedResult
     */
   @JsonProperty("isOfAge", Boolean, true)
   isOfAge?: boolean | undefined = undefined;
    /**
     * @type {Enums.AgeVerifyFailureCode[]}
     * @memberof StoreIfVerifiedResult
     */
   @JsonProperty("failureCodes", [Enums.AgeVerifyFailureCode], true)
   failureCodes?: Enums.AgeVerifyFailureCode[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof StoreIfVerifiedResult
     */
   @JsonProperty("fromStore", Boolean, true)
   fromStore?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof StoreIfVerifiedResult
     */
   @JsonProperty("createdUtc", String, true)
   createdUtc?: string | undefined = undefined;
 }