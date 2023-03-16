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
import { ItemTagDetailInputModel } from "./ItemTagDetailInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents an item in your company's product catalog.
 * @export
 * @class ItemModel
 */
 @JsonObject("ItemModel")
 export class ItemModel {
    /**
     * @type {number}
     * @memberof ItemModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("itemCode", String)
   itemCode: string = undefined;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   @JsonProperty("taxCodeId", Number, true)
   taxCodeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("itemGroup", String, true)
   itemGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("source", String, true)
   source?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("sourceEntityId", String, true)
   sourceEntityId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   @JsonProperty("upc", String, true)
   upc?: string | undefined = undefined;
    /**
     * @type {ClassificationModel[]}
     * @memberof ItemModel
     */
   @JsonProperty("classifications", [ClassificationModel], true)
   classifications?: ClassificationModel[] | undefined = undefined;
    /**
     * @type {ItemParameterModel[]}
     * @memberof ItemModel
     */
   @JsonProperty("parameters", [ItemParameterModel], true)
   parameters?: ItemParameterModel[] | undefined = undefined;
    /**
     * @type {ItemTagDetailInputModel[]}
     * @memberof ItemModel
     */
   @JsonProperty("tags", [ItemTagDetailInputModel], true)
   tags?: ItemTagDetailInputModel[] | undefined = undefined;
    /**
     * @type {object}
     * @memberof ItemModel
     */
   @JsonProperty("properties", Object, true)
   properties?: object | undefined = undefined;
 }