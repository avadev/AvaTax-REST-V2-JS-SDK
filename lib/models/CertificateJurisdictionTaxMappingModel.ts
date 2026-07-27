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
 * Represents one multi-tax mapping row attached to a certificate jurisdiction.
Each row references a TPS tax-type / sub-tax-type combination that the
certificate is exempt for.
 * @export
 * @class CertificateJurisdictionTaxMappingModel
 */
 @JsonObject("CertificateJurisdictionTaxMappingModel")
 export class CertificateJurisdictionTaxMappingModel {
    /**
     * @type {number}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("taxTypeId", Number, true)
   taxTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("subTaxTypeId", Number, true)
   subTaxTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("subTaxType", String, true)
   subTaxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateJurisdictionTaxMappingModel
     */
   @JsonProperty("sourceMappingId", Number, true)
   sourceMappingId?: number | undefined = undefined;
 }