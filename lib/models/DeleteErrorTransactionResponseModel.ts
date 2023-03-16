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
 * Response model of a single error transaction delete
 * @export
 * @class DeleteErrorTransactionResponseModel
 */
 @JsonObject("DeleteErrorTransactionResponseModel")
 export class DeleteErrorTransactionResponseModel {
    /**
     * @type {Enums.AvataxDeleteErrorTransactionStatus}
     * @memberof DeleteErrorTransactionResponseModel
     */
   @JsonProperty("result", Enums.AvataxDeleteErrorTransactionStatusConverter, true)
   result?: Enums.AvataxDeleteErrorTransactionStatus | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof DeleteErrorTransactionResponseModel
     */
   @JsonProperty("documentType", Enums.DocumentTypeConverter)
   documentType: Enums.DocumentType = undefined;
    /**
     * @type {string}
     * @memberof DeleteErrorTransactionResponseModel
     */
   @JsonProperty("documentCode", String)
   documentCode: string = undefined;
 }