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
 * Represents a tag for an item in your company's product catalog.
 * @export
 * @class ItemTagDetailOutputModel
 */
 @JsonObject("ItemTagDetailOutputModel")
 export class ItemTagDetailOutputModel {
    /**
     * @type {string}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("tagName", String)
   tagName: string = undefined;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("itemTagDetailId", Number, true)
   itemTagDetailId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("tagId", Number, true)
   tagId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemTagDetailOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
 }