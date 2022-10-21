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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents an invitation for a customer to use CertExpress to self-report their own certificates.
This invitation is delivered by your choice of method, or you can present a hyperlink to the user
directly in your connector.  Your customer will be redirected to https://app.certexpress.com/ where
they can follow a step-by-step guide to enter information about their exemption certificates.  The
certificates entered will be recorded and automatically linked to their customer record.
 * @export
 * @interface CertExpressInvitationModel
 */
 export interface CertExpressInvitationModel {
    /**
     * @type {number}
     * @memberof CertExpressInvitationModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CertExpressInvitationModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   recipient: string;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   customerCode: string;
    /**
     * @type {Models.CustomerModel}
     * @memberof CertExpressInvitationModel
     */
   customer: Models.CustomerModel;
    /**
     * @type {Models.CoverLetterModel}
     * @memberof CertExpressInvitationModel
     */
   coverLetter: Models.CoverLetterModel;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   emailStatus: string;
    /**
     * @type {boolean}
     * @memberof CertExpressInvitationModel
     */
   coverLettersOnly?: boolean;
    /**
     * @type {number[]}
     * @memberof CertExpressInvitationModel
     */
   exposureZones: number[];
    /**
     * @type {number[]}
     * @memberof CertExpressInvitationModel
     */
   exemptReasons: number[];
    /**
     * @type {Enums.CertificateRequestDeliveryMethod}
     * @memberof CertExpressInvitationModel
     */
   deliveryMethod?: Enums.CertificateRequestDeliveryMethod;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   message: string;
    /**
     * @type {Date}
     * @memberof CertExpressInvitationModel
     */
   date?: Date;
    /**
     * @type {string}
     * @memberof CertExpressInvitationModel
     */
   requestLink: string;
 }