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
 * Represents a request for a new account with Avalara for a new Firm client.
 * @export
 * @interface NewFirmClientAccountRequestModel
 */
 export interface NewFirmClientAccountRequestModel {
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   accountName: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   title?: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   phoneNumber?: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   companyCode?: string;
    /**
     * @type {Models.CompanyAddress}
     * @memberof NewFirmClientAccountRequestModel
     */
   companyAddress: Models.CompanyAddress;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   taxPayerIdNumber?: string;
    /**
     * @type {string[]}
     * @memberof NewFirmClientAccountRequestModel
     */
   properties: string[];
 }