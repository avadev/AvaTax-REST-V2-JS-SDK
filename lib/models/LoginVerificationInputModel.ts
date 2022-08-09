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
 * @version    22.7.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a verification request using Skyscraper for a company
 * @export
 * @interface LoginVerificationInputModel
 */
 export interface LoginVerificationInputModel {
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   companyId: number;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   accountId: number;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   taxFormCode: string;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   username: string;
    /**
     * @type {string}
     * @memberof LoginVerificationInputModel
     */
   password: string;
    /**
     * @type {object}
     * @memberof LoginVerificationInputModel
     */
   additionalOptions: object;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   bulkRequestId?: number;
    /**
     * @type {number}
     * @memberof LoginVerificationInputModel
     */
   priority?: number;
 }