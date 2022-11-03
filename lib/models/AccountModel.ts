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
 * An AvaTax account.
 * @export
 * @interface AccountModel
 */
 export interface AccountModel {
    /**
     * @type {number}
     * @memberof AccountModel
     */
   id: number;
    /**
     * @type {string}
     * @memberof AccountModel
     */
   crmid?: string;
    /**
     * @type {string}
     * @memberof AccountModel
     */
   name: string;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   endDate?: Date;
    /**
     * @type {Enums.AccountStatusId}
     * @memberof AccountModel
     */
   accountStatusId?: Enums.AccountStatusId;
    /**
     * @type {Enums.AccountTypeId}
     * @memberof AccountModel
     */
   accountTypeId?: Enums.AccountTypeId;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof AccountModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof AccountModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.SubscriptionModel[]}
     * @memberof AccountModel
     */
   subscriptions: Models.SubscriptionModel[];
    /**
     * @type {Models.UserModel[]}
     * @memberof AccountModel
     */
   users: Models.UserModel[];
    /**
     * @type {boolean}
     * @memberof AccountModel
     */
   isSamlEnabled?: boolean;
 }