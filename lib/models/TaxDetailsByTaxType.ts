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
 * Tax Details by Tax Type
 * @export
 * @interface TaxDetailsByTaxType
 */
 export interface TaxDetailsByTaxType {
    /**
     * @type {string}
     * @memberof TaxDetailsByTaxType
     */
   taxType?: string;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   totalTaxable?: number;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   totalExempt?: number;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   totalNonTaxable?: number;
    /**
     * @type {number}
     * @memberof TaxDetailsByTaxType
     */
   totalTax?: number;
    /**
     * @type {Models.TaxDetailsByTaxSubType[]}
     * @memberof TaxDetailsByTaxType
     */
   taxSubTypeDetails?: Models.TaxDetailsByTaxSubType[];
 }