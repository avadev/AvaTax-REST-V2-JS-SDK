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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A certificate is a document stored in either AvaTax Exemptions or CertCapture.  The certificate document
can contain information about a customer's eligibility for exemption from sales or use taxes based on
criteria you specify when you store the certificate.  To view or manage your certificates directly, please
log onto the administrative website for the product you purchased.
 * @export
 * @interface CertificateModel
 */
 export interface CertificateModel {
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   companyId?: number;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   signedDate: Date;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   expirationDate: Date;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   filename?: string;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   documentExists?: boolean;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   valid?: boolean;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   verified?: boolean;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   exemptPercentage?: number;
    /**
     * @type {boolean}
     * @memberof CertificateModel
     */
   isSingleCertificate?: boolean;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   exemptionNumber?: string;
    /**
     * @type {Models.ExemptionReasonModel}
     * @memberof CertificateModel
     */
   validatedExemptionReason?: Models.ExemptionReasonModel;
    /**
     * @type {Models.ExemptionReasonModel}
     * @memberof CertificateModel
     */
   exemptionReason: Models.ExemptionReasonModel;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   status?: string;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof CertificateModel
     */
   modifiedDate?: Date;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   taxNumberType?: string;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   businessNumberType?: string;
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   pageCount?: number;
    /**
     * @type {Models.CustomerModel[]}
     * @memberof CertificateModel
     */
   customers?: Models.CustomerModel[];
    /**
     * @type {Models.PoNumberModel[]}
     * @memberof CertificateModel
     */
   poNumbers?: Models.PoNumberModel[];
    /**
     * @type {Models.ExposureZoneModel}
     * @memberof CertificateModel
     */
   exposureZone: Models.ExposureZoneModel;
    /**
     * @type {Models.CertificateAttributeModel[]}
     * @memberof CertificateModel
     */
   attributes?: Models.CertificateAttributeModel[];
    /**
     * @type {number}
     * @memberof CertificateModel
     */
   ecmsId?: number;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   ecmsStatus?: string;
    /**
     * @type {string}
     * @memberof CertificateModel
     */
   pdf?: string;
    /**
     * @type {string[]}
     * @memberof CertificateModel
     */
   pages?: string[];
 }