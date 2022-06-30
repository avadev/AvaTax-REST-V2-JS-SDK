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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Response when checking if a company has a POA on file with Avalara
 * @export
 * @interface PowerOfAttorneyCheckModel
 */
 export interface PowerOfAttorneyCheckModel {
    /**
     * @type {number}
     * @memberof PowerOfAttorneyCheckModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof PowerOfAttorneyCheckModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof PowerOfAttorneyCheckModel
     */
   region: string;
    /**
     * @type {boolean}
     * @memberof PowerOfAttorneyCheckModel
     */
   activePoa?: boolean;
    /**
     * @type {Date}
     * @memberof PowerOfAttorneyCheckModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof PowerOfAttorneyCheckModel
     */
   expirationDate?: Date;
    /**
     * @type {Models.ResourceFileDownloadResult}
     * @memberof PowerOfAttorneyCheckModel
     */
   availablePoa: Models.ResourceFileDownloadResult;
 }