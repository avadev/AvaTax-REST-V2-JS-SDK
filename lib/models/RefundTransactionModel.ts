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
 * Refund a committed transaction
 * @export
 * @interface RefundTransactionModel
 */
 export interface RefundTransactionModel {
    /**
     * @type {string}
     * @memberof RefundTransactionModel
     */
   refundTransactionCode?: string;
    /**
     * @type {Date}
     * @memberof RefundTransactionModel
     */
   refundDate: Date;
    /**
     * @type {Enums.RefundType}
     * @memberof RefundTransactionModel
     */
   refundType?: Enums.RefundType;
    /**
     * @type {number}
     * @memberof RefundTransactionModel
     */
   refundPercentage?: number;
    /**
     * @type {string[]}
     * @memberof RefundTransactionModel
     */
   refundLines: string[];
    /**
     * @type {string}
     * @memberof RefundTransactionModel
     */
   referenceCode?: string;
 }