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
 * Informational or warning messages returned by AvaTax with a transaction
 * @export
 * @class AvaTaxMessage
 */
 @JsonObject("AvaTaxMessage")
 export class AvaTaxMessage {
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   @JsonProperty("details", String, true)
   details?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   @JsonProperty("refersTo", String, true)
   refersTo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   @JsonProperty("severity", String, true)
   severity?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   @JsonProperty("source", String, true)
   source?: string | undefined = undefined;
 }