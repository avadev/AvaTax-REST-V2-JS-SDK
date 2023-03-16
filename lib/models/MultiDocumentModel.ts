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
import { TransactionModel } from "./TransactionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A MultiDocument transaction represents a sale or purchase that occurred between more than two companies.
            
A traditional transaction requires exactly two parties: a seller and a buyer.  MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction.  Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document.  This separation of documents allows each seller to file their taxes separately.
 * @export
 * @class MultiDocumentModel
 */
 @JsonObject("MultiDocumentModel")
 export class MultiDocumentModel {
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter, true)
   type?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {TransactionModel[]}
     * @memberof MultiDocumentModel
     */
   @JsonProperty("documents", [TransactionModel], true)
   documents?: TransactionModel[] | undefined = undefined;
 }