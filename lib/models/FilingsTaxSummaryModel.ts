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
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @interface FilingsTaxSummaryModel
 */
 export interface FilingsTaxSummaryModel {
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   salesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   taxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   remittanceAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   collectAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   salesAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   taxableAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   nonTaxableAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   taxAccrualAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   reportableSalesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   reportableNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   reportableTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxSummaryModel
     */
   reportableTaxAmount?: number;
 }