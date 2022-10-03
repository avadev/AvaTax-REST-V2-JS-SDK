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
 * A model for return adjustments.
 * @export
 * @interface FilingAdjustmentModel
 */
 export interface FilingAdjustmentModel {
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   filingId?: number;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   amount: number;
    /**
     * @type {Enums.AdjustmentPeriodTypeId}
     * @memberof FilingAdjustmentModel
     */
   period: Enums.AdjustmentPeriodTypeId;
    /**
     * @type {string}
     * @memberof FilingAdjustmentModel
     */
   type: string;
    /**
     * @type {boolean}
     * @memberof FilingAdjustmentModel
     */
   isCalculated?: boolean;
    /**
     * @type {Enums.PaymentAccountTypeId}
     * @memberof FilingAdjustmentModel
     */
   accountType: Enums.PaymentAccountTypeId;
    /**
     * @type {string}
     * @memberof FilingAdjustmentModel
     */
   reason: string;
    /**
     * @type {Date}
     * @memberof FilingAdjustmentModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingAdjustmentModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingAdjustmentModel
     */
   modifiedUserId?: number;
 }