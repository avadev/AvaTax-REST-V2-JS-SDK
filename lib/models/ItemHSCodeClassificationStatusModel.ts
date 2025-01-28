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
 * Represent HS code classification for a given item.
 * @export
 * @class ItemHSCodeClassificationStatusModel
 */
 @JsonObject("ItemHSCodeClassificationStatusModel")
 export class ItemHSCodeClassificationStatusModel {
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("status", String)
   status: string = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("details", String, true)
   details?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("createdAt", DateConverter, true)
   createdAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("modifiedAt", DateConverter, true)
   modifiedAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemHSCodeClassificationStatusModel
     */
   @JsonProperty("completedAt", DateConverter, true)
   completedAt?: Date | undefined = undefined;
 }