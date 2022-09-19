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
 * Represents a service that this account has subscribed to.
 * @export
 * @interface SubscriptionModel
 */
 export interface SubscriptionModel {
    /**
     * @type {number}
     * @memberof SubscriptionModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof SubscriptionModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof SubscriptionModel
     */
   subscriptionTypeId?: number;
    /**
     * @type {string}
     * @memberof SubscriptionModel
     */
   subscriptionDescription: string;
    /**
     * @type {Date}
     * @memberof SubscriptionModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof SubscriptionModel
     */
   endDate?: Date;
    /**
     * @type {Date}
     * @memberof SubscriptionModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof SubscriptionModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof SubscriptionModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof SubscriptionModel
     */
   modifiedUserId?: number;
 }