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
import { CountryModel } from "./CountryModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Defines a state, region, or province as known to Avalara's certificate management system.
 * @export
 * @class StateModel
 */
 @JsonObject("StateModel")
 export class StateModel {
    /**
     * @type {number}
     * @memberof StateModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof StateModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof StateModel
     */
   @JsonProperty("initials", String, true)
   initials?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof StateModel
     */
   @JsonProperty("geoCode", Number, true)
   geoCode?: number | undefined = undefined;
    /**
     * @type {CountryModel}
     * @memberof StateModel
     */
   @JsonProperty("country", CountryModel, true)
   country?: CountryModel | undefined = undefined;
 }