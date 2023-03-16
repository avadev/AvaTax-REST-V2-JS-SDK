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
import { FrequencyAvailableModel } from "./FrequencyAvailableModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * CycleSafe Option Result
 * @export
 * @class CycleSafeOptionResultModel
 */
 @JsonObject("CycleSafeOptionResultModel")
 export class CycleSafeOptionResultModel {
    /**
     * @type {string}
     * @memberof CycleSafeOptionResultModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CycleSafeOptionResultModel
     */
   @JsonProperty("mustCloneFilingCalendar", Boolean, true)
   mustCloneFilingCalendar?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleSafeOptionResultModel
     */
   @JsonProperty("clonedCalendarEffDate", DateConverter, true)
   clonedCalendarEffDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleSafeOptionResultModel
     */
   @JsonProperty("expiredCalendarEndDate", DateConverter, true)
   expiredCalendarEndDate?: Date | undefined = undefined;
    /**
     * @type {FrequencyAvailableModel[]}
     * @memberof CycleSafeOptionResultModel
     */
   @JsonProperty("frequenciesAvailable", [FrequencyAvailableModel], true)
   frequenciesAvailable?: FrequencyAvailableModel[] | undefined = undefined;
 }