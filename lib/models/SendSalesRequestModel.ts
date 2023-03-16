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
 * SendSales Request Model.
 * @export
 * @class SendSalesRequestModel
 */
 @JsonObject("SendSalesRequestModel")
 export class SendSalesRequestModel {
    /**
     * @type {number}
     * @memberof SendSalesRequestModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string[]}
     * @memberof SendSalesRequestModel
     */
   @JsonProperty("taxCodes", [String])
   taxCodes: string[] = undefined;
    /**
     * @type {Date}
     * @memberof SendSalesRequestModel
     */
   @JsonProperty("date", DateConverter)
   date: Date = undefined;
    /**
     * @type {Enums.SendSalesOutputFileFormat}
     * @memberof SendSalesRequestModel
     */
   @JsonProperty("format", Enums.SendSalesOutputFileFormatConverter, true)
   format?: Enums.SendSalesOutputFileFormat | undefined = undefined;
    /**
     * @type {Enums.SendSalesFileType}
     * @memberof SendSalesRequestModel
     */
   @JsonProperty("type", Enums.SendSalesFileTypeConverter, true)
   type?: Enums.SendSalesFileType | undefined = undefined;
 }