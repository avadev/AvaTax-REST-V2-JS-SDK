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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Regions
 * @export
 * @interface MultiTaxFilingRegionModel
 */
 export interface MultiTaxFilingRegionModel {
    /**
     * @type {string}
     * @memberof MultiTaxFilingRegionModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof MultiTaxFilingRegionModel
     */
   region?: string;
    /**
     * @type {boolean}
     * @memberof MultiTaxFilingRegionModel
     */
   hasNexus?: boolean;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof MultiTaxFilingRegionModel
     */
   status?: Enums.FilingStatusId;
    /**
     * @type {Models.FilingsTaxSummaryModel}
     * @memberof MultiTaxFilingRegionModel
     */
   regionTaxSummary: Models.FilingsTaxSummaryModel;
    /**
     * @type {Models.FilingsTaxDetailsModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   regionTaxDetails: Models.FilingsTaxDetailsModel[];
    /**
     * @type {Models.FilingsCheckupSuggestedFormModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   suggestReturns: Models.FilingsCheckupSuggestedFormModel[];
    /**
     * @type {Models.MultiTaxFilingReturnModel[]}
     * @memberof MultiTaxFilingRegionModel
     */
   returns: Models.MultiTaxFilingReturnModel[];
 }