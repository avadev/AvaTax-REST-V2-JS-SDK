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
 * Represents a single notification.
            
A notification is a message from Avalara that may have relevance to your business.  You may want
to regularly review notifications and then dismiss them when you are certain that you have addressed
any relevant concerns raised by this notification.
            
An example of a notification would be a message about new software, or a change to AvaTax that may
affect you, or a potential issue with your company's tax profile.
 * @export
 * @interface NotificationModel
 */
 export interface NotificationModel {
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   referenceObject?: string;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   referenceId?: number;
    /**
     * @type {Enums.NotificationSeverityLevel}
     * @memberof NotificationModel
     */
   severityLevelId: Enums.NotificationSeverityLevel;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   category?: string;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   topic?: string;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   message: string;
    /**
     * @type {boolean}
     * @memberof NotificationModel
     */
   needsAction?: boolean;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   actionName?: string;
    /**
     * @type {string}
     * @memberof NotificationModel
     */
   actionLink?: string;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   actionDueDate?: Date;
    /**
     * @type {boolean}
     * @memberof NotificationModel
     */
   dismissed?: boolean;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   dismissedByUserId?: number;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   dismissedDate?: Date;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   expireDate: Date;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof NotificationModel
     */
   modifiedUserId?: number;
    /**
     * @type {Date}
     * @memberof NotificationModel
     */
   modifiedDate?: Date;
 }