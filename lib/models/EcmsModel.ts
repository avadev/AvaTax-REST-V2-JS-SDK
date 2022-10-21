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
 * Exempt certificate
 * @export
 * @interface EcmsModel
 */
 export interface EcmsModel {
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   exemptCertId: number;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   companyId: number;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   customerCode: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   customerName: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   address1: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   address2: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   address3: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   city: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   postalCode: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   country: string;
    /**
     * @type {Enums.ExemptCertTypeId}
     * @memberof EcmsModel
     */
   exemptCertTypeId: Enums.ExemptCertTypeId;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   documentRefNo: string;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   businessTypeId: number;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   businessTypeOtherDescription: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   exemptReasonId: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   exemptReasonOtherDescription: string;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   effectiveDate?: Date;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   regionsApplicable: string;
    /**
     * @type {Enums.ExemptCertStatusId}
     * @memberof EcmsModel
     */
   exemptCertStatusId: Enums.ExemptCertStatusId;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   lastTransactionDate?: Date;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   expiryDate?: Date;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   countryIssued: string;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   avaCertId: string;
    /**
     * @type {Enums.ExemptCertReviewStatusId}
     * @memberof EcmsModel
     */
   exemptCertReviewStatusId?: Enums.ExemptCertReviewStatusId;
    /**
     * @type {Models.EcmsDetailModel[]}
     * @memberof EcmsModel
     */
   details: Models.EcmsDetailModel[];
 }