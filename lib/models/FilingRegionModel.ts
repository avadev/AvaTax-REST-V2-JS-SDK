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
 * Regions
 * @export
 * @interface FilingRegionModel
 */
 export interface FilingRegionModel {
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   filingId?: number;
    /**
     * @type {string}
     * @memberof FilingRegionModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof FilingRegionModel
     */
   region?: string;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   salesAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   taxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   taxDueAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   collectAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   totalRemittanceAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   consumerUseTaxAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   consumerUseNonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   consumerUseTaxableAmount?: number;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   approveDate?: Date;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   startDate?: Date;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   endDate?: Date;
    /**
     * @type {boolean}
     * @memberof FilingRegionModel
     */
   hasNexus?: boolean;
    /**
     * @type {Enums.FilingStatusId}
     * @memberof FilingRegionModel
     */
   status?: Enums.FilingStatusId;
    /**
     * @type {Models.FilingReturnModel[]}
     * @memberof FilingRegionModel
     */
   returns: Models.FilingReturnModel[];
    /**
     * @type {Models.FilingsCheckupSuggestedFormModel[]}
     * @memberof FilingRegionModel
     */
   suggestReturns: Models.FilingsCheckupSuggestedFormModel[];
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingRegionModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingRegionModel
     */
   modifiedUserId?: number;
 }