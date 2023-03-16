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
import { CertificateModel } from "./CertificateModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Indicates the customer's exemption status in a specific country and region.
 * @export
 * @class ExemptionStatusModel
 */
 @JsonObject("ExemptionStatusModel")
 export class ExemptionStatusModel {
    /**
     * @type {string}
     * @memberof ExemptionStatusModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {CertificateModel}
     * @memberof ExemptionStatusModel
     */
   @JsonProperty("certificate", CertificateModel, true)
   certificate?: CertificateModel | undefined = undefined;
 }