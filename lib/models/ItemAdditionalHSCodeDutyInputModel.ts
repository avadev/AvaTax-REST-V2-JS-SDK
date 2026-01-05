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
 * Represents input model for additional HS Code Duty Details request.
 * @export
 * @class ItemAdditionalHSCodeDutyInputModel
 */
 @JsonObject("ItemAdditionalHSCodeDutyInputModel")
 export class ItemAdditionalHSCodeDutyInputModel {
    /**
     * @type {number}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("itemId", Number)
   itemId: number = undefined;
    /**
     * @type {number}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("countryOfImport", String)
   countryOfImport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("countryOfExport", String)
   countryOfExport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("countryOfOrigin", String)
   countryOfOrigin: string = undefined;
    /**
     * @type {string}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("manufacturerName", String, true)
   manufacturerName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemAdditionalHSCodeDutyInputModel
     */
   @JsonProperty("hscode", String)
   hscode: string = undefined;
 }