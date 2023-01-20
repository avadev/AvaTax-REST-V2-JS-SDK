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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents information about a newly created account
 * @export
 * @interface NewAccountModel
 */
 export interface NewAccountModel {
    /**
     * @type {number}
     * @memberof NewAccountModel
     */
   accountId?: number;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   accountDetailsEmailedTo?: string;
    /**
     * @type {Date}
     * @memberof NewAccountModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof NewAccountModel
     */
   emailedDate?: Date;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   limitations?: string;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   licenseKey?: string;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   paymentUrl?: string;
 }