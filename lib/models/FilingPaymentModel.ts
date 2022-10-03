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
 * A model for return payments.
 * @export
 * @interface FilingPaymentModel
 */
 export interface FilingPaymentModel {
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   filingId: number;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   paymentAmount: number;
    /**
     * @type {Enums.PaymentType}
     * @memberof FilingPaymentModel
     */
   type: Enums.PaymentType;
    /**
     * @type {boolean}
     * @memberof FilingPaymentModel
     */
   isCalculated?: boolean;
    /**
     * @type {Date}
     * @memberof FilingPaymentModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingPaymentModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingPaymentModel
     */
   modifiedUserId?: number;
 }