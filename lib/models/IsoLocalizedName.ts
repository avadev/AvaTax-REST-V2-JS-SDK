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
 * Represents a language-specific localized name of a particular geographic entity such
as a country or a region.
 * @export
 * @class IsoLocalizedName
 */
 @JsonObject("IsoLocalizedName")
 export class IsoLocalizedName {
    /**
     * @type {string}
     * @memberof IsoLocalizedName
     */
   @JsonProperty("languageAlpha2Code", String, true)
   languageAlpha2Code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoLocalizedName
     */
   @JsonProperty("languageAlpha3Code", String, true)
   languageAlpha3Code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoLocalizedName
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
 }