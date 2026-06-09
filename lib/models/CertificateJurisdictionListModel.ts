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
 * Represents a valid jurisdiction that can be linked to a certificate.
            
This model is returned by the `ListJurisdictions` API, which lists the jurisdictions
that are valid for a given exposure zone and exemption tax code. The returned
jurisdictions can then be used to add valid jurisdictions to a certificate.
 * @export
 * @class CertificateJurisdictionListModel
 */
 @JsonObject("CertificateJurisdictionListModel")
 export class CertificateJurisdictionListModel {
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateJurisdictionListModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
 }