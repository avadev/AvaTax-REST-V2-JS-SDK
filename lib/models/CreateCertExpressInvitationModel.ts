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
 * Represents an invitation for a customer to use CertExpress to self-report their own certificates.
This invitation is delivered by your choice of method, or you can present a hyperlink to the user
directly in your connector.  Your customer will be redirected to https://app.certexpress.com/ where
they can follow a step-by-step guide to enter information about their exemption certificates.  The
certificates entered will be recorded and automatically linked to their customer record.
 * @export
 * @class CreateCertExpressInvitationModel
 */
 @JsonObject("CreateCertExpressInvitationModel")
 export class CreateCertExpressInvitationModel {
    /**
     * @type {string}
     * @memberof CreateCertExpressInvitationModel
     */
   @JsonProperty("recipient", String, true)
   recipient?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCertExpressInvitationModel
     */
   @JsonProperty("coverLetterTitle", String, true)
   coverLetterTitle?: string | undefined = undefined;
    /**
     * @type {number[]}
     * @memberof CreateCertExpressInvitationModel
     */
   @JsonProperty("exposureZones", [Number], true)
   exposureZones?: number[] | undefined = undefined;
    /**
     * @type {number[]}
     * @memberof CreateCertExpressInvitationModel
     */
   @JsonProperty("exemptReasons", [Number], true)
   exemptReasons?: number[] | undefined = undefined;
    /**
     * @type {Enums.CertificateRequestDeliveryMethod}
     * @memberof CreateCertExpressInvitationModel
     */
   @JsonProperty("deliveryMethod", Enums.CertificateRequestDeliveryMethodConverter, true)
   deliveryMethod?: Enums.CertificateRequestDeliveryMethod | undefined = undefined;
 }