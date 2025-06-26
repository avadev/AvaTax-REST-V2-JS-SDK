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
 * Item image details model
 * @export
 * @class ItemImageDetailsModel
 */
 @JsonObject("ItemImageDetailsModel")
 export class ItemImageDetailsModel {
    /**
     * @type {string}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("itemImageId", String, true)
   itemImageId?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("itemImageDetailId", Number, true)
   itemImageDetailId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("createdAt", DateConverter, true)
   createdAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("modifiedAt", DateConverter, true)
   modifiedAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemImageDetailsModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }