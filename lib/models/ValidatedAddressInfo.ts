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
 * Represents a validated address
 * @export
 * @class ValidatedAddressInfo
 */
 @JsonObject("ValidatedAddressInfo")
 export class ValidatedAddressInfo {
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("addressType", String, true)
   addressType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("latitude", Number, true)
   latitude?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ValidatedAddressInfo
     */
   @JsonProperty("longitude", Number, true)
   longitude?: number | undefined = undefined;
 }