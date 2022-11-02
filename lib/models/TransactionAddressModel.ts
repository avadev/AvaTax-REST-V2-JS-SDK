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
 * An address used within this transaction.
 * @export
 * @interface TransactionAddressModel
 */
 export interface TransactionAddressModel {
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   transactionId?: number;
    /**
     * @type {Enums.BoundaryLevel}
     * @memberof TransactionAddressModel
     */
   boundaryLevel?: Enums.BoundaryLevel;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   line1?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   line3?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   postalCode?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   country?: string;
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   taxRegionId?: number;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   latitude?: string;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   longitude?: string;
    /**
     * @type {Models.JurisdictionModel[]}
     * @memberof TransactionAddressModel
     */
   jurisdictions: Models.JurisdictionModel[];
 }