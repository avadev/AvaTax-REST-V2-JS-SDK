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
import { ClassificationModel } from "./ClassificationModel";
import { ItemParameterModel } from "./ItemParameterModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents an item in your company's product catalog.
 * @export
 * @class ItemCatalogueInputModel
 */
 @JsonObject("ItemCatalogueInputModel")
 export class ItemCatalogueInputModel {
    /**
     * @type {number}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("itemCode", String)
   itemCode: string = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("upc", String, true)
   upc?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("itemGroup", String, true)
   itemGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("source", String)
   source: string = undefined;
    /**
     * @type {string}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("sourceEntityId", String, true)
   sourceEntityId?: string | undefined = undefined;
    /**
     * @type {object}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("properties", Object, true)
   properties?: object | undefined = undefined;
    /**
     * @type {ClassificationModel[]}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("classifications", [ClassificationModel], true)
   classifications?: ClassificationModel[] | undefined = undefined;
    /**
     * @type {ItemParameterModel[]}
     * @memberof ItemCatalogueInputModel
     */
   @JsonProperty("parameters", [ItemParameterModel], true)
   parameters?: ItemParameterModel[] | undefined = undefined;
 }