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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a request for a free trial account for AvaTax.
Free trial accounts are only available on the Sandbox environment.
 * @export
 * @interface FreeTrialRequestModel
 */
 export interface FreeTrialRequestModel {
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   company: string;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   phone: string;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   campaign?: string;
    /**
     * @type {Models.CompanyAddress}
     * @memberof FreeTrialRequestModel
     */
   companyAddress: Models.CompanyAddress;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   website?: string;
    /**
     * @type {boolean}
     * @memberof FreeTrialRequestModel
     */
   haveReadAvalaraTermsAndConditions: boolean;
    /**
     * @type {boolean}
     * @memberof FreeTrialRequestModel
     */
   acceptAvalaraTermsAndConditions: boolean;
 }