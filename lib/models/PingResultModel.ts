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
 * Ping Result Model
 * @export
 * @interface PingResultModel
 */
 export interface PingResultModel {
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   version: string;
    /**
     * @type {boolean}
     * @memberof PingResultModel
     */
   authenticated?: boolean;
    /**
     * @type {Enums.AuthenticationTypeId}
     * @memberof PingResultModel
     */
   authenticationType?: Enums.AuthenticationTypeId;
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   authenticatedUserName: string;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   authenticatedUserId?: number;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   authenticatedAccountId?: number;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   authenticatedCompanyId?: number;
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   crmid: string;
 }