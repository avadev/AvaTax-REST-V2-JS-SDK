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
import { CertificateTaxTypeJurisdictionModel } from "./CertificateTaxTypeJurisdictionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents one TPS sub-tax-type node nested under a Avalara.AvaTax.AccountServices.Models.v2.CertificateTaxTypeModel.
 * @export
 * @class CertificateTaxSubTypeModel
 */
 @JsonObject("CertificateTaxSubTypeModel")
 export class CertificateTaxSubTypeModel {
    /**
     * @type {string}
     * @memberof CertificateTaxSubTypeModel
     */
   @JsonProperty("subTaxType", String, true)
   subTaxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateTaxSubTypeModel
     */
   @JsonProperty("subTaxTypeId", Number, true)
   subTaxTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateTaxSubTypeModel
     */
   @JsonProperty("sourceMappingId", Number, true)
   sourceMappingId?: number | undefined = undefined;
    /**
     * @type {CertificateTaxTypeJurisdictionModel[]}
     * @memberof CertificateTaxSubTypeModel
     */
   @JsonProperty("jurisdictions", [CertificateTaxTypeJurisdictionModel], true)
   jurisdictions?: CertificateTaxTypeJurisdictionModel[] | undefined = undefined;
 }