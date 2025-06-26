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
import { StateModel } from "./StateModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a physical location used in exemption certificate management.
 * @export
 * @class ClerkLocationModel
 */
 @JsonObject("ClerkLocationModel")
 export class ClerkLocationModel {
    /**
     * @type {number}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("address_line1", String, true)
   address_line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("address_line2", String, true)
   address_line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("zip", String, true)
   zip?: string | undefined = undefined;
    /**
     * @type {StateModel}
     * @memberof ClerkLocationModel
     */
   @JsonProperty("state", StateModel, true)
   state?: StateModel | undefined = undefined;
 }