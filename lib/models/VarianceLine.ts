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
 * 
 * @export
 * @interface VarianceLine
 */
 export interface VarianceLine {
    /**
     * @type {string}
     * @memberof VarianceLine
     */
   lineNo?: string;
    /**
     * @type {string}
     * @memberof VarianceLine
     */
   hsCode?: string;
    /**
     * @type {number}
     * @memberof VarianceLine
     */
   dutyRate?: number;
    /**
     * @type {number}
     * @memberof VarianceLine
     */
   taxRate?: number;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceLine
     */
   amount?: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceLine
     */
   taxableAmount?: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceLine
     */
   dutyPaid?: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceLine
     */
   taxPaid?: Models.VarianceUnit;
    /**
     * @type {Models.VarianceUnit}
     * @memberof VarianceLine
     */
   totalTaxPaid?: Models.VarianceUnit;
    /**
     * @type {Models.VarianceDetail[]}
     * @memberof VarianceLine
     */
   details?: Models.VarianceDetail[];
 }