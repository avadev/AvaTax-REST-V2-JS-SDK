/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Replace an existing transaction recorded in AvaTax with a new one.
 * @export
 * @interface BatchAdjustTransactionModel
 */
 export interface BatchAdjustTransactionModel {
    /**
     * @type {string}
     * @memberof BatchAdjustTransactionModel
     */
   companyCode: string;
    /**
     * @type {string}
     * @memberof BatchAdjustTransactionModel
     */
   transactionCode: string;
    /**
     * @type {string}
     * @memberof BatchAdjustTransactionModel
     */
   documentType: string;
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof BatchAdjustTransactionModel
     */
   adjustmentReason: Enums.AdjustmentReason;
    /**
     * @type {string}
     * @memberof BatchAdjustTransactionModel
     */
   adjustmentDescription: string;
    /**
     * @type {Models.CreateTransactionModel}
     * @memberof BatchAdjustTransactionModel
     */
   newTransaction: Models.CreateTransactionModel;
 }