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
 * Error Transaction Model
 * @export
 * @class ErrorTransactionOutputModel
 */
 @JsonObject("ErrorTransactionOutputModel")
 export class ErrorTransactionOutputModel {
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("errorCode", String, true)
   errorCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("errorMessage", String, true)
   errorMessage?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("avataxErrorJson", String, true)
   avataxErrorJson?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("avataxCreateTransactionJson", String, true)
   avataxCreateTransactionJson?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("datasource", String, true)
   datasource?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("documentDate", DateConverter, true)
   documentDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("expiresAt", DateConverter, true)
   expiresAt?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("amount", Number, true)
   amount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("datasourceSource", String, true)
   datasourceSource?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("shipToCountry", String, true)
   shipToCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("shipToRegion", String, true)
   shipToRegion?: string | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("documentType", Enums.DocumentTypeConverter)
   documentType: Enums.DocumentType = undefined;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   @JsonProperty("documentCode", String)
   documentCode: string = undefined;
 }