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
 * The output model for report parameter definitions
 * @export
 * @interface ReportParametersModel
 */
 export interface ReportParametersModel {
    /**
     * @type {Date}
     * @memberof ReportParametersModel
     */
   startDate?: Date;
    /**
     * @type {Date}
     * @memberof ReportParametersModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   state?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   dateFilter?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   docType?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   dateFormat?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   currencyCode?: string;
    /**
     * @type {number}
     * @memberof ReportParametersModel
     */
   numberOfPartitions?: number;
    /**
     * @type {number}
     * @memberof ReportParametersModel
     */
   partition?: number;
    /**
     * @type {boolean}
     * @memberof ReportParametersModel
     */
   isLocked?: boolean;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   merchantSellerId?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   documentStatus?: string;
    /**
     * @type {boolean}
     * @memberof ReportParametersModel
     */
   isModifiedDateSameAsDocumentDate?: boolean;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   taxGroup?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   taxName?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   taxCode?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   customerVendorCode?: string;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   taxSubType?: string;
 }