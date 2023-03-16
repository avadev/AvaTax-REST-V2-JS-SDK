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
import { CycleSafeFilingCalendarEditModel } from "./CycleSafeFilingCalendarEditModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Options for expiring a filing calendar.
 * @export
 * @class CycleSafeEditRequestModel
 */
 @JsonObject("CycleSafeEditRequestModel")
 export class CycleSafeEditRequestModel {
    /**
     * @type {number}
     * @memberof CycleSafeEditRequestModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleSafeEditRequestModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CycleSafeEditRequestModel
     */
   @JsonProperty("filingCalendarId", Number, true)
   filingCalendarId?: number | undefined = undefined;
    /**
     * @type {CycleSafeFilingCalendarEditModel[]}
     * @memberof CycleSafeEditRequestModel
     */
   @JsonProperty("edits", [CycleSafeFilingCalendarEditModel], true)
   edits?: CycleSafeFilingCalendarEditModel[] | undefined = undefined;
 }