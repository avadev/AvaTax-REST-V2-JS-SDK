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
 * @version    22.9.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a request for a new account with Avalara for a new subscriber.
Contains information about the account requested and the rate plan selected.
 * @export
 * @interface NewAccountRequestModel
 */
 export interface NewAccountRequestModel {
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   offer: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   connectorId: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   campaign: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   leadSource: string;
    /**
     * @type {Date}
     * @memberof NewAccountRequestModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof NewAccountRequestModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   accountName: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   website: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   paymentMethodId: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   title: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   phoneNumber: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   username: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   userPassword: string;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   welcomeEmail: string;
    /**
     * @type {Models.CompanyAddress}
     * @memberof NewAccountRequestModel
     */
   companyAddress: Models.CompanyAddress;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   companyCode: string;
    /**
     * @type {string[]}
     * @memberof NewAccountRequestModel
     */
   properties: string[];
    /**
     * @type {boolean}
     * @memberof NewAccountRequestModel
     */
   acceptAvalaraTermsAndConditions?: boolean;
    /**
     * @type {boolean}
     * @memberof NewAccountRequestModel
     */
   haveReadAvalaraTermsAndConditions?: boolean;
    /**
     * @type {object}
     * @memberof NewAccountRequestModel
     */
   marketingContext: object;
    /**
     * @type {Enums.AccountTypeId}
     * @memberof NewAccountRequestModel
     */
   accountType?: Enums.AccountTypeId;
    /**
     * @type {string}
     * @memberof NewAccountRequestModel
     */
   taxPayerIdNumber: string;
 }