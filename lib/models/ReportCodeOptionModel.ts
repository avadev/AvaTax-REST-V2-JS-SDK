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
 * Represents ReportCodeOption Model
 * @export
 * @class ReportCodeOptionModel
 */
 @JsonObject("ReportCodeOptionModel")
 export class ReportCodeOptionModel {
    /**
     * @type {string}
     * @memberof ReportCodeOptionModel
     */
   @JsonProperty("stateAssignedCode", String, true)
   stateAssignedCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportCodeOptionModel
     */
   @JsonProperty("label", String, true)
   label?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportCodeOptionModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
 }