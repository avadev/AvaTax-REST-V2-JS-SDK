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
 * Request model used as input for Variance API.
 * @export
 * @interface VarianceRequestModel
 */
 export interface VarianceRequestModel {
    /**
     * @type {number}
     * @memberof VarianceRequestModel
     */
   documentId?: number;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   documentCode?: string;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   purchaseOrderNo?: string;
    /**
     * @type {string}
     * @memberof VarianceRequestModel
     */
   referenceNo?: string;
    /**
     * @type {number}
     * @memberof VarianceRequestModel
     */
   exchangeRate?: number;
    /**
     * @type {Models.VarianceLine[]}
     * @memberof VarianceRequestModel
     */
   lines: Models.VarianceLine[];
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceRequestModel
     */
   amount: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceRequestModel
     */
   taxableAmount: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceRequestModel
     */
   dutyPaid: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceRequestModel
     */
   taxPaid: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceRequestModel
     */
   totalTaxPaid: Models.VarianceUnit;
    /**
     * @type {Models.VarianceDetail[]}
     * @memberof VarianceRequestModel
     */
   details: Models.VarianceDetail[];
 }