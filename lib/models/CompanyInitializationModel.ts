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
 * Company Initialization Model
 * @export
 * @interface CompanyInitializationModel
 */
 export interface CompanyInitializationModel {
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   companyCode?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   vatRegistrationId?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   taxpayerIdNumber?: string;
    /**
     * @type {boolean}
     * @memberof CompanyInitializationModel
     */
   isFein?: boolean;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   line1: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   line3?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   city: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   postalCode: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   title?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   phoneNumber: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   mobileNumber?: string;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   faxNumber?: string;
    /**
     * @type {number}
     * @memberof CompanyInitializationModel
     */
   parentCompanyId?: number;
 }