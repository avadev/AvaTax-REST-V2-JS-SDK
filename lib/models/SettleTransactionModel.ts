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
 * Settle this transaction with your ledger by executing one or many actions against that transaction.
            
You may use this endpoint to verify the transaction, change the transaction's code, and commit the transaction for reporting purposes.
This endpoint may be used to execute any or all of these actions at once.
 * @export
 * @interface SettleTransactionModel
 */
 export interface SettleTransactionModel {
    /**
     * @type {Models.VerifyTransactionModel}
     * @memberof SettleTransactionModel
     */
   verify: Models.VerifyTransactionModel;
    /**
     * @type {Models.ChangeTransactionCodeModel}
     * @memberof SettleTransactionModel
     */
   changeCode: Models.ChangeTransactionCodeModel;
    /**
     * @type {Models.CommitTransactionModel}
     * @memberof SettleTransactionModel
     */
   commit: Models.CommitTransactionModel;
 }