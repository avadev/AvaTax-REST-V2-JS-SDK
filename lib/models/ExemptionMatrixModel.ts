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
 * A single entry in a company's exemption matrix.
            
The exemption matrix holds, for each combination of exposure zone and exempt
reason that a company has configured, the rule used to work out when a
certificate for that combination expires, and the qualifying statement shown
to the customer.
 * @export
 * @class ExemptionMatrixModel
 */
 @JsonObject("ExemptionMatrixModel")
 export class ExemptionMatrixModel {
    /**
     * @type {number}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exposureZoneId", Number, true)
   exposureZoneId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exposureZoneName", String, true)
   exposureZoneName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exposureZoneTag", String, true)
   exposureZoneTag?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exemptReasonId", Number, true)
   exemptReasonId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exemptReasonName", String, true)
   exemptReasonName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("exemptReasonTag", String, true)
   exemptReasonTag?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("timeLength", String, true)
   timeLength?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionMatrixModel
     */
   @JsonProperty("qualifyingStatement", String, true)
   qualifyingStatement?: string | undefined = undefined;
 }