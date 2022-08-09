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
 * @version    22.7.0
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
 * @interface CreateCertExpressInvitationModel
 */
 export interface CreateCertExpressInvitationModel {
    /**
     * @type {string}
     * @memberof CreateCertExpressInvitationModel
     */
   recipient: string;
    /**
     * @type {string}
     * @memberof CreateCertExpressInvitationModel
     */
   coverLetterTitle: string;
    /**
     * @type {number[]}
     * @memberof CreateCertExpressInvitationModel
     */
   exposureZones: number[];
    /**
     * @type {number[]}
     * @memberof CreateCertExpressInvitationModel
     */
   exemptReasons: number[];
    /**
     * @type {Enums.CertificateRequestDeliveryMethod}
     * @memberof CreateCertExpressInvitationModel
     */
   deliveryMethod?: Enums.CertificateRequestDeliveryMethod;
 }