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
 * A single failed row from an HS code verification batch request.
 * @export
 * @class ItemHSCodeVerificationFailedRowModel
 */
 @JsonObject("ItemHSCodeVerificationFailedRowModel")
 export class ItemHSCodeVerificationFailedRowModel {
    /**
     * @type {number}
     * @memberof ItemHSCodeVerificationFailedRowModel
     */
   @JsonProperty("rowIndex", Number, true)
   rowIndex?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeVerificationFailedRowModel
     */
   @JsonProperty("itemId", String, true)
   itemId?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof ItemHSCodeVerificationFailedRowModel
     */
   @JsonProperty("errors", [String], true)
   errors?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeVerificationFailedRowModel
     */
   @JsonProperty("errorCode", String, true)
   errorCode?: string | undefined = undefined;
 }