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
import { CommunicationCustomerResponse } from "./CommunicationCustomerResponse";
import { CommunicationTaxTypeResponse } from "./CommunicationTaxTypeResponse";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Encloses communication certificate details
 * @export
 * @class CommunicationCertificateResponse
 */
 @JsonObject("CommunicationCertificateResponse")
 export class CommunicationCertificateResponse {
    /**
     * @type {number}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("expirationDate", DateConverter, true)
   expirationDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("exemptionReason", String, true)
   exemptionReason?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("exemptionRegion", String, true)
   exemptionRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("taxNumber", String, true)
   taxNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("certificateStatus", String, true)
   certificateStatus?: string | undefined = undefined;
    /**
     * @type {CommunicationCustomerResponse[]}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("customers", [CommunicationCustomerResponse], true)
   customers?: CommunicationCustomerResponse[] | undefined = undefined;
    /**
     * @type {CommunicationTaxTypeResponse[]}
     * @memberof CommunicationCertificateResponse
     */
   @JsonProperty("exemptions", [CommunicationTaxTypeResponse], true)
   exemptions?: CommunicationTaxTypeResponse[] | undefined = undefined;
 }