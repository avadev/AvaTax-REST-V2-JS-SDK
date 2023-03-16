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
 * The Response of the /shippingverify endpoint. Describes the result of checking all applicable shipping rules against each line in the transaction.
 * @export
 * @class ShippingVerifyResult
 */
 @JsonObject("ShippingVerifyResult")
 export class ShippingVerifyResult {
    /**
     * @type {boolean}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("compliant", Boolean, true)
   compliant?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("successMessages", String, true)
   successMessages?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("failureMessages", String, true)
   failureMessages?: string | undefined = undefined;
    /**
     * @type {Enums.FailureCodes[]}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("failureCodes", [Enums.FailureCodes], true)
   failureCodes?: Enums.FailureCodes[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("warningCodes", [String], true)
   warningCodes?: string[] | undefined = undefined;
    /**
     * @type {object[]}
     * @memberof ShippingVerifyResult
     */
   @JsonProperty("lines", [Object], true)
   lines?: object[] | undefined = undefined;
 }