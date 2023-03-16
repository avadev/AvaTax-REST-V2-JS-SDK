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
 * Contains information about a company's exemption certificate status.
            
This model can be used to determine if your company is able to use the Customers, Certificates, and
CertExpressInvites APIs within AvaTax.
 * @export
 * @class ProvisionStatusModel
 */
 @JsonObject("ProvisionStatusModel")
 export class ProvisionStatusModel {
    /**
     * @type {Enums.CertCaptureProvisionStatus}
     * @memberof ProvisionStatusModel
     */
   @JsonProperty("status", Enums.CertCaptureProvisionStatusConverter, true)
   status?: Enums.CertCaptureProvisionStatus | undefined = undefined;
    /**
     * @type {number}
     * @memberof ProvisionStatusModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ProvisionStatusModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
 }