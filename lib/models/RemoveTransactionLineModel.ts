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
 * Model to specify lines to be removed
 * @export
 * @class RemoveTransactionLineModel
 */
 @JsonObject("RemoveTransactionLineModel")
 export class RemoveTransactionLineModel {
    /**
     * @type {string}
     * @memberof RemoveTransactionLineModel
     */
   @JsonProperty("companyCode", String)
   companyCode: string = undefined;
    /**
     * @type {string}
     * @memberof RemoveTransactionLineModel
     */
   @JsonProperty("transactionCode", String)
   transactionCode: string = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof RemoveTransactionLineModel
     */
   @JsonProperty("documentType", Enums.DocumentTypeConverter, true)
   documentType?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof RemoveTransactionLineModel
     */
   @JsonProperty("lines", [String])
   lines: string[] = undefined;
    /**
     * @type {boolean}
     * @memberof RemoveTransactionLineModel
     */
   @JsonProperty("renumber", Boolean, true)
   renumber?: boolean | undefined = undefined;
 }