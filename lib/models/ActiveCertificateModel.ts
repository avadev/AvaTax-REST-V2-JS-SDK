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
import { ExposureZoneModel } from "./ExposureZoneModel";
import { ExemptionReasonModel } from "./ExemptionReasonModel";
import { CertificateModel } from "./CertificateModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Certificate with exemption reason and exposure zone. This is exposed in the URL's `$includes`.
 * @export
 * @class ActiveCertificateModel
 */
 @JsonObject("ActiveCertificateModel")
 export class ActiveCertificateModel {
    /**
     * @type {number}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("created", DateConverter, true)
   created?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("modified", DateConverter, true)
   modified?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("expectedTaxNumber", String, true)
   expectedTaxNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("actualTaxNumber", String, true)
   actualTaxNumber?: string | undefined = undefined;
    /**
     * @type {ExposureZoneModel}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("exposureZone", ExposureZoneModel, true)
   exposureZone?: ExposureZoneModel | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("expectedTaxCode", ExemptionReasonModel, true)
   expectedTaxCode?: ExemptionReasonModel | undefined = undefined;
    /**
     * @type {ExemptionReasonModel}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("actualTaxCode", ExemptionReasonModel, true)
   actualTaxCode?: ExemptionReasonModel | undefined = undefined;
    /**
     * @type {CertificateModel}
     * @memberof ActiveCertificateModel
     */
   @JsonProperty("certificate", CertificateModel, true)
   certificate?: CertificateModel | undefined = undefined;
 }