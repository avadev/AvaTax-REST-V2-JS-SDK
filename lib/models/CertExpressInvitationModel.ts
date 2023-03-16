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
import { CustomerModel } from "./CustomerModel";
import { CoverLetterModel } from "./CoverLetterModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents an invitation for a customer to use CertExpress to self-report their own certificates.
This invitation is delivered by your choice of method, or you can present a hyperlink to the user
directly in your connector.  Your customer will be redirected to https://app.certexpress.com/ where
they can follow a step-by-step guide to enter information about their exemption certificates.  The
certificates entered will be recorded and automatically linked to their customer record.
 * @export
 * @class CertExpressInvitationModel
 */
 @JsonObject("CertExpressInvitationModel")
 export class CertExpressInvitationModel {
    /**
     * @type {number}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("recipient", String, true)
   recipient?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("customerCode", String, true)
   customerCode?: string | undefined = undefined;
    /**
     * @type {CustomerModel}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("customer", CustomerModel, true)
   customer?: CustomerModel | undefined = undefined;
    /**
     * @type {CoverLetterModel}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("coverLetter", CoverLetterModel, true)
   coverLetter?: CoverLetterModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("emailStatus", String, true)
   emailStatus?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("coverLettersOnly", Boolean, true)
   coverLettersOnly?: boolean | undefined = undefined;
    /**
     * @type {number[]}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("exposureZones", [Number], true)
   exposureZones?: number[] | undefined = undefined;
    /**
     * @type {number[]}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("exemptReasons", [Number], true)
   exemptReasons?: number[] | undefined = undefined;
    /**
     * @type {Enums.CertificateRequestDeliveryMethod}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("deliveryMethod", Enums.CertificateRequestDeliveryMethodConverter, true)
   deliveryMethod?: Enums.CertificateRequestDeliveryMethod | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("date", DateConverter, true)
   date?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   @JsonProperty("requestLink", String, true)
   requestLink?: string | undefined = undefined;
 }