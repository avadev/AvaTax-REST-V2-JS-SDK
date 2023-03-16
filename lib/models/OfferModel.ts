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
 * Gets the response for the offer request
 * @export
 * @class OfferModel
 */
 @JsonObject("OfferModel")
 export class OfferModel {
    /**
     * @type {string}
     * @memberof OfferModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof OfferModel
     */
   @JsonProperty("offerMessage", String, true)
   offerMessage?: string | undefined = undefined;
 }