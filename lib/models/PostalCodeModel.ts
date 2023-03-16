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
 * Represents a PostalCode and its associated data like: country, region, effective dates, etc.
 * @export
 * @class PostalCodeModel
 */
 @JsonObject("PostalCodeModel")
 export class PostalCodeModel {
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof PostalCodeModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PostalCodeModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PostalCodeModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
 }