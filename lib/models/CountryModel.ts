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
 * Defines a country as known to Avalara's certificate management system.
 * @export
 * @class CountryModel
 */
 @JsonObject("CountryModel")
 export class CountryModel {
    /**
     * @type {number}
     * @memberof CountryModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryModel
     */
   @JsonProperty("initials", String, true)
   initials?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CountryModel
     */
   @JsonProperty("abbreviation", String, true)
   abbreviation?: string | undefined = undefined;
 }