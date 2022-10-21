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
 * Represents one configuration setting for this account
 * @export
 * @interface AccountConfigurationModel
 */
 export interface AccountConfigurationModel {
    /**
     * @type {number}
     * @memberof AccountConfigurationModel
     */
   accountId?: number;
    /**
     * @type {string}
     * @memberof AccountConfigurationModel
     */
   category: string;
    /**
     * @type {string}
     * @memberof AccountConfigurationModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof AccountConfigurationModel
     */
   value: string;
    /**
     * @type {Date}
     * @memberof AccountConfigurationModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof AccountConfigurationModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof AccountConfigurationModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof AccountConfigurationModel
     */
   modifiedUserId?: number;
 }