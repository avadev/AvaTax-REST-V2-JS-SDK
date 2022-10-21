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
 * Settle this transaction with your ledger by verifying its amounts.
If the transaction is not yet committed, you may specify the "commit" value to commit it to the ledger and allow it to be reported.
You may also optionally change the transaction's code by specifying the "newTransactionCode" value.
 * @export
 * @interface ChangeTransactionCodeModel
 */
 export interface ChangeTransactionCodeModel {
    /**
     * @type {string}
     * @memberof ChangeTransactionCodeModel
     */
   newCode: string;
 }