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
 * 
 * @export
 * @interface VarianceResponseEntity
 */
 export interface VarianceResponseEntity {
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   documentId?: number;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   documentCode?: string;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   customInvoiceId?: number;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   varianceId?: number;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   status?: string;
    /**
     * @type {string}
     * @memberof VarianceResponseEntity
     */
   errorMessage?: string;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   taxableVariance?: number;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   dutyVariance?: number;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   taxVariance?: number;
    /**
     * @type {number}
     * @memberof VarianceResponseEntity
     */
   totalTaxVariance?: number;
    /**
     * @type {Models.VarianceDetail[]}
     * @memberof VarianceResponseEntity
     */
   unMappedDetails: Models.VarianceDetail[];
    /**
     * @type {Models.VarianceResponseLine[]}
     * @memberof VarianceResponseEntity
     */
   varianceLines: Models.VarianceResponseLine[];
 }