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
 * An attachment associated with a filing return
 * @export
 * @interface FilingReturnCreditModel
 */
 export interface FilingReturnCreditModel {
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   totalSales?: number;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   totalExempt?: number;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   totalTaxable?: number;
    /**
     * @type {number}
     * @memberof FilingReturnCreditModel
     */
   totalTax?: number;
    /**
     * @type {Models.WorksheetDocument[]}
     * @memberof FilingReturnCreditModel
     */
   transactionDetails: Models.WorksheetDocument[];
 }