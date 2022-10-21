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
 * A model for displaying report task metadata
 * @export
 * @interface ReportModel
 */
 export interface ReportModel {
    /**
     * @type {number}
     * @memberof ReportModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   reportType: string;
    /**
     * @type {Models.ReportParametersModel}
     * @memberof ReportModel
     */
   parameters: Models.ReportParametersModel;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   status: string;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   size?: number;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   format: string;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   file: string;
    /**
     * @type {Date}
     * @memberof ReportModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   createdUserId?: number;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   createdUser: string;
    /**
     * @type {Date}
     * @memberof ReportModel
     */
   completedDate?: Date;
 }