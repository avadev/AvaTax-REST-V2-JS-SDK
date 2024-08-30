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
 * Encloses Communication exemption designator details
 * @export
 * @class CommunicationExemptionDesignatorResponse
 */
 @JsonObject("CommunicationExemptionDesignatorResponse")
 export class CommunicationExemptionDesignatorResponse {
    /**
     * @type {number}
     * @memberof CommunicationExemptionDesignatorResponse
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationExemptionDesignatorResponse
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationExemptionDesignatorResponse
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
 }