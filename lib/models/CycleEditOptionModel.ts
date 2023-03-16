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
 * Model with options for actual filing calendar output based on user edits to filing calendar.
 * @export
 * @class CycleEditOptionModel
 */
 @JsonObject("CycleEditOptionModel")
 export class CycleEditOptionModel {
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("success", Boolean, true)
   success?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("customerMustApprove", Boolean, true)
   customerMustApprove?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("mustCloneFilingCalendar", Boolean, true)
   mustCloneFilingCalendar?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("clonedCalendarEffDate", DateConverter, true)
   clonedCalendarEffDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleEditOptionModel
     */
   @JsonProperty("expiredCalendarEndDate", DateConverter, true)
   expiredCalendarEndDate?: Date | undefined = undefined;
 }