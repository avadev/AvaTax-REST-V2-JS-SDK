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
import { CertificateTaxSubTypeModel } from "./CertificateTaxSubTypeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents one TPS tax-type node returned by the `ListCertificateTaxTypes` API.
            
The pair (`taxType`, `taxTypeId`) is what the caller uses to
populate `taxTypeMappings` on a certificate jurisdiction.
 * @export
 * @class CertificateTaxTypeModel
 */
 @JsonObject("CertificateTaxTypeModel")
 export class CertificateTaxTypeModel {
    /**
     * @type {string}
     * @memberof CertificateTaxTypeModel
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateTaxTypeModel
     */
   @JsonProperty("taxTypeId", Number, true)
   taxTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateTaxTypeModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {CertificateTaxSubTypeModel[]}
     * @memberof CertificateTaxTypeModel
     */
   @JsonProperty("taxSubTypeDetails", [CertificateTaxSubTypeModel], true)
   taxSubTypeDetails?: CertificateTaxSubTypeModel[] | undefined = undefined;
 }