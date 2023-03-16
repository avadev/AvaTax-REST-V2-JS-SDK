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
 * Filing Calendar Edit
 * @export
 * @class CycleSafeFilingCalendarEditModel
 */
 @JsonObject("CycleSafeFilingCalendarEditModel")
 export class CycleSafeFilingCalendarEditModel {
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("fieldName", String, true)
   fieldName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("destination", String, true)
   destination?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("questionId", Number, true)
   questionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("questionCode", String, true)
   questionCode?: string | undefined = undefined;
    /**
     * @type {object}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("oldValue", Object, true)
   oldValue?: object | undefined = undefined;
    /**
     * @type {object}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   @JsonProperty("newValue", Object, true)
   newValue?: object | undefined = undefined;
 }