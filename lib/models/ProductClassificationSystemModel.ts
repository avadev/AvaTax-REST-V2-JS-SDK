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
import { ProductSystemCountryModel } from "./ProductSystemCountryModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a product classification system.
 * @export
 * @class ProductClassificationSystemModel
 */
 @JsonObject("ProductClassificationSystemModel")
 export class ProductClassificationSystemModel {
    /**
     * @type {number}
     * @memberof ProductClassificationSystemModel
     */
   @JsonProperty("systemId", Number, true)
   systemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProductClassificationSystemModel
     */
   @JsonProperty("systemCode", String, true)
   systemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProductClassificationSystemModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ProductClassificationSystemModel
     */
   @JsonProperty("customsValue", String, true)
   customsValue?: string | undefined = undefined;
    /**
     * @type {ProductSystemCountryModel[]}
     * @memberof ProductClassificationSystemModel
     */
   @JsonProperty("countries", [ProductSystemCountryModel], true)
   countries?: ProductSystemCountryModel[] | undefined = undefined;
 }