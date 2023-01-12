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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @interface FilingsTaxDetailsModel
 */
 export interface FilingsTaxDetailsModel {
    /**
     * @type {string}
     * @memberof FilingsTaxDetailsModel
     */
   taxType?: string;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   salesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   taxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingsTaxDetailsModel
     */
   numberOfNights?: number;
 }