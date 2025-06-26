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
 * Item image output model with the image URL
 * @export
 * @class ItemImageDetailOutputModel
 */
 @JsonObject("ItemImageDetailOutputModel")
 export class ItemImageDetailOutputModel {
    /**
     * @type {string}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("imageUrl", String, true)
   imageUrl?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("itemImageId", String, true)
   itemImageId?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("itemImageDetailId", Number, true)
   itemImageDetailId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("createdAt", DateConverter, true)
   createdAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("modifiedAt", DateConverter, true)
   modifiedAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }