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
 * @class FilingCalendarEditModel
 */
 @JsonObject("FilingCalendarEditModel")
 export class FilingCalendarEditModel {
    /**
     * @type {string}
     * @memberof FilingCalendarEditModel
     */
   @JsonProperty("fieldName", String)
   fieldName: string = undefined;
    /**
     * @type {number}
     * @memberof FilingCalendarEditModel
     */
   @JsonProperty("questionId", Number)
   questionId: number = undefined;
    /**
     * @type {object}
     * @memberof FilingCalendarEditModel
     */
   @JsonProperty("oldValue", Object, true)
   oldValue?: object | undefined = undefined;
    /**
     * @type {object}
     * @memberof FilingCalendarEditModel
     */
   @JsonProperty("newValue", Object, true)
   newValue?: object | undefined = undefined;
 }