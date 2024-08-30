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
 * Encloses communication location details
 * @export
 * @class CommunicationLocationResponse
 */
 @JsonObject("CommunicationLocationResponse")
 export class CommunicationLocationResponse {
    /**
     * @type {string}
     * @memberof CommunicationLocationResponse
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationLocationResponse
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationLocationResponse
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationLocationResponse
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
 }