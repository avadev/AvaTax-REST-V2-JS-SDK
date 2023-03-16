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
 * Worksheet Checkup Report Suggested Form Model
 * @export
 * @class FilingsCheckupSuggestedFormModel
 */
 @JsonObject("FilingsCheckupSuggestedFormModel")
 export class FilingsCheckupSuggestedFormModel {
    /**
     * @type {number}
     * @memberof FilingsCheckupSuggestedFormModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupSuggestedFormModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupSuggestedFormModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupSuggestedFormModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupSuggestedFormModel
     */
   @JsonProperty("returnName", String, true)
   returnName?: string | undefined = undefined;
 }