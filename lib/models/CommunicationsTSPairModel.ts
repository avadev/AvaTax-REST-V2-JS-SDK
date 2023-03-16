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
 * Represents a transaction/service type pair for telecommunications tax
 * @export
 * @class CommunicationsTSPairModel
 */
 @JsonObject("CommunicationsTSPairModel")
 export class CommunicationsTSPairModel {
    /**
     * @type {number}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("transactionTypeId", Number)
   transactionTypeId: number = undefined;
    /**
     * @type {number}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("serviceTypeId", Number)
   serviceTypeId: number = undefined;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("TransactionType", String, true)
   TransactionType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("ServiceType", String, true)
   ServiceType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CommunicationsTSPairModel
     */
   @JsonProperty("requiredParameters", [String], true)
   requiredParameters?: string[] | undefined = undefined;
 }