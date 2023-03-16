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
 * An exemption reason defines why a certificate allows a customer to be exempt
for purposes of tax calculation.  For a full list of defined exemption reasons,
please call the `ListCertificateExemptionReasons` API.
 * @export
 * @class ExemptionReasonModel
 */
 @JsonObject("ExemptionReasonModel")
 export class ExemptionReasonModel {
    /**
     * @type {number}
     * @memberof ExemptionReasonModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExemptionReasonModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
 }