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
 * @version    22.7.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a tax override for a transaction
 * @export
 * @interface TaxOverrideModel
 */
 export interface TaxOverrideModel {
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TaxOverrideModel
     */
   type?: Enums.TaxOverrideType;
    /**
     * @type {number}
     * @memberof TaxOverrideModel
     */
   taxAmount?: number;
    /**
     * @type {Date}
     * @memberof TaxOverrideModel
     */
   taxDate?: Date;
    /**
     * @type {string}
     * @memberof TaxOverrideModel
     */
   reason: string;
    /**
     * @type {Models.TransactionLineTaxAmountByTaxTypeModel[]}
     * @memberof TaxOverrideModel
     */
   taxAmountByTaxTypes: Models.TransactionLineTaxAmountByTaxTypeModel[];
 }