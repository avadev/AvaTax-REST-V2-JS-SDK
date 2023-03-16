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
 * An edit to be made on a filing calendar.
 * @export
 * @class ACHEntryDetailModel
 */
 @JsonObject("ACHEntryDetailModel")
 export class ACHEntryDetailModel {
    /**
     * @type {number}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("companyName", String, true)
   companyName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("stateRegion", String, true)
   stateRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("individualId", String, true)
   individualId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("individualName", String, true)
   individualName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("amount", Number, true)
   amount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   @JsonProperty("traceNumber", String, true)
   traceNumber?: string | undefined = undefined;
 }