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
 * Represents a jurisdiction associated with a certificate.
A certificate can be linked to one or more jurisdictions indicating the tax
authority regions where the certificate applies.
 * @export
 * @class CertificateJurisdictionModel
 */
 @JsonObject("CertificateJurisdictionModel")
 export class CertificateJurisdictionModel {
    /**
     * @type {number}
     * @memberof CertificateJurisdictionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
 }