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
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @interface MultiTaxFilingModel
 */
 export interface MultiTaxFilingModel {
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   month?: number;
    /**
     * @type {number}
     * @memberof MultiTaxFilingModel
     */
   year?: number;
    /**
     * @type {Enums.WorksheetTypeId}
     * @memberof MultiTaxFilingModel
     */
   type?: Enums.WorksheetTypeId;
    /**
     * @type {Models.FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingModel
     */
   taxSummary: Models.FilingsTaxSummaryModel;
    /**
     * @type {Models.FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingModel
     */
   taxDetails: Models.FilingsTaxDetailsModel[];
    /**
     * @type {Models.MultiTaxFilingRegionModel[]}
     * @memberof MultiTaxFilingModel
     */
   filingRegions: Models.MultiTaxFilingRegionModel[];
 }