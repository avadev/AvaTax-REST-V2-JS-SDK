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
 * Summary information about an overall transaction.
 * @export
 * @interface TransactionSummary
 */
 export interface TransactionSummary {
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   country?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   region?: string;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TransactionSummary
     */
   jurisType?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   jurisCode?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   jurisName?: string;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   taxAuthorityType?: number;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   stateAssignedNo?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   taxType?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   taxSubType?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   taxName?: string;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   taxGroup?: string;
    /**
     * @type {Enums.RateType}
     * @memberof TransactionSummary
     */
   rateType?: Enums.RateType;
    /**
     * @type {string}
     * @memberof TransactionSummary
     */
   rateTypeCode?: string;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   taxable?: number;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   rate?: number;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   tax?: number;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   taxCalculated?: number;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   nonTaxable?: number;
    /**
     * @type {number}
     * @memberof TransactionSummary
     */
   exemption?: number;
 }