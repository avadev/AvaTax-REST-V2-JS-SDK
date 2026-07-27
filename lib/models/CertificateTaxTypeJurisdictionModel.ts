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
 * Represents one TPS-Nexus jurisdiction node nested under a Avalara.AvaTax.AccountServices.Models.v2.CertificateTaxSubTypeModel.
 * @export
 * @class CertificateTaxTypeJurisdictionModel
 */
 @JsonObject("CertificateTaxTypeJurisdictionModel")
 export class CertificateTaxTypeJurisdictionModel {
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeJurisdictionModel
     */
   @JsonProperty("shortName", String, true)
   shortName?: string | undefined = undefined;
 }