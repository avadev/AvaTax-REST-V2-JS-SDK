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
 * A preferred program is a customs and/or duty program that can be used to handle cross-border transactions.
Customers who sign up for a preferred program may obtain better terms for their customs and duty payments.
            
To indicate that your company has signed up for a preferred program, specify the `code` value from this
object as the value for the `AvaTax.LC.PreferredProgram` parameter in your transaction.
 * @export
 * @class PreferredProgramModel
 */
 @JsonObject("PreferredProgramModel")
 export class PreferredProgramModel {
    /**
     * @type {number}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("originCountry", String, true)
   originCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("destinationCountry", String, true)
   destinationCountry?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PreferredProgramModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }