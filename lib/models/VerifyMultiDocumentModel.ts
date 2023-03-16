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
 * Verify that a MultiDocument object matches the information in your accounting system.
            
If all attributes of the MultiDocument object match the values in your request, the
MultiDocument object will be moved to the document status `Posted`.
            
For more information on document status, see [DocumentStatus](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/DocumentStatus/).
 * @export
 * @class VerifyMultiDocumentModel
 */
 @JsonObject("VerifyMultiDocumentModel")
 export class VerifyMultiDocumentModel {
    /**
     * @type {string}
     * @memberof VerifyMultiDocumentModel
     */
   @JsonProperty("code", String)
   code: string = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof VerifyMultiDocumentModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter)
   type: Enums.DocumentType = undefined;
    /**
     * @type {Date}
     * @memberof VerifyMultiDocumentModel
     */
   @JsonProperty("verifyTransactionDate", DateConverter, true)
   verifyTransactionDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof VerifyMultiDocumentModel
     */
   @JsonProperty("verifyTotalAmount", Number, true)
   verifyTotalAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof VerifyMultiDocumentModel
     */
   @JsonProperty("verifyTotalTax", Number, true)
   verifyTotalTax?: number | undefined = undefined;
 }