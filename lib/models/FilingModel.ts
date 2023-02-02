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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a listing of all tax calculation data for filings and for accruing to future filings.
 * @export
 * @interface FilingModel
 */
 export interface FilingModel {
    /**
     * @type {number}
     * @memberof FilingModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   month?: number;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   year?: number;
    /**
     * @type {Enums.WorksheetTypeId}
     * @memberof FilingModel
     */
   type?: Enums.WorksheetTypeId;
    /**
     * @type {Date}
     * @memberof FilingModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.FilingRegionModel[]}
     * @memberof FilingModel
     */
   filingRegions?: Models.FilingRegionModel[];
 }