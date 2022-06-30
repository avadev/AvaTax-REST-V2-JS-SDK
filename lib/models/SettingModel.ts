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
 * This object is used to keep track of custom information about a company.
            
The company settings system is a metadata system that you can use to store extra information
about a company.  Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
            
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
 * @export
 * @interface SettingModel
 */
 export interface SettingModel {
    /**
     * @type {number}
     * @memberof SettingModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof SettingModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   set: string;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   value: string;
    /**
     * @type {Date}
     * @memberof SettingModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof SettingModel
     */
   modifiedUserId?: number;
 }