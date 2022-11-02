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
 * A company and account
 * @export
 * @interface MrsCompanyModel
 */
 export interface MrsCompanyModel {
    /**
     * @type {number}
     * @memberof MrsCompanyModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof MrsCompanyModel
     */
   companyName?: string;
    /**
     * @type {number}
     * @memberof MrsCompanyModel
     */
   accountId?: number;
    /**
     * @type {string}
     * @memberof MrsCompanyModel
     */
   accountName?: string;
    /**
     * @type {string}
     * @memberof MrsCompanyModel
     */
   tin?: string;
    /**
     * @type {string}
     * @memberof MrsCompanyModel
     */
   companyCode?: string;
    /**
     * @type {Date}
     * @memberof MrsCompanyModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof MrsCompanyModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof MrsCompanyModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof MrsCompanyModel
     */
   modifiedUserId?: number;
 }