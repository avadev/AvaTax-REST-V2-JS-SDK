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
import { WorksheetDocumentLine } from "./WorksheetDocumentLine";
import { Message } from "./Message";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class WorksheetDocument
 */
 @JsonObject("WorksheetDocument")
 export class WorksheetDocument {
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   @JsonProperty("docCode", String, true)
   docCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof WorksheetDocument
     */
   @JsonProperty("docDate", DateConverter, true)
   docDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   @JsonProperty("totalExempt", Number, true)
   totalExempt?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   @JsonProperty("totalTaxable", Number, true)
   totalTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   @JsonProperty("totalTax", Number, true)
   totalTax?: number | undefined = undefined;
    /**
     * @type {WorksheetDocumentLine[]}
     * @memberof WorksheetDocument
     */
   @JsonProperty("lines", [WorksheetDocumentLine], true)
   lines?: WorksheetDocumentLine[] | undefined = undefined;
    /**
     * @type {Message[]}
     * @memberof WorksheetDocument
     */
   @JsonProperty("messages", [Message], true)
   messages?: Message[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   @JsonProperty("resultCode", String, true)
   resultCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   @JsonProperty("transactionId", String, true)
   transactionId?: string | undefined = undefined;
 }