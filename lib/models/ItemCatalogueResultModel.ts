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
 * 
 * @export
 * @class ItemCatalogueResultModel
 */
 @JsonObject("ItemCatalogueResultModel")
 export class ItemCatalogueResultModel {
    /**
     * @type {number}
     * @memberof ItemCatalogueResultModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueResultModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueResultModel
     */
   @JsonProperty("sourceEntityId", String, true)
   sourceEntityId?: string | undefined = undefined;
    /**
     * @type {Enums.ItemCatalogueResultEvent}
     * @memberof ItemCatalogueResultModel
     */
   @JsonProperty("itemEvent", Enums.ItemCatalogueResultEventConverter, true)
   itemEvent?: Enums.ItemCatalogueResultEvent | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ItemCatalogueResultModel
     */
   @JsonProperty("errors", [String], true)
   errors?: string[] | undefined = undefined;
 }