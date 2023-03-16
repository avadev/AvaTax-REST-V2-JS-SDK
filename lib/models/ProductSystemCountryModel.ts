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
 * Represents a System Country.
 * @export
 * @class ProductSystemCountryModel
 */
 @JsonObject("ProductSystemCountryModel")
 export class ProductSystemCountryModel {
    /**
     * @type {number}
     * @memberof ProductSystemCountryModel
     */
   @JsonProperty("systemCountryId", Number, true)
   systemCountryId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ProductSystemCountryModel
     */
   @JsonProperty("systemId", Number, true)
   systemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProductSystemCountryModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ProductSystemCountryModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ProductSystemCountryModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }