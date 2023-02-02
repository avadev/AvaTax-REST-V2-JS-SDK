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
 * Represents a tax code that can be applied to items on a transaction.
A tax code can have specific rules for specific jurisdictions that change the tax calculation behavior.
 * @export
 * @interface TaxCodeModel
 */
 export interface TaxCodeModel {
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   taxCode: string;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   taxCodeTypeId: string;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   description?: string;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   parentTaxCode?: string;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   isPhysical?: boolean;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   goodsServiceCode?: number;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   entityUseCode?: string;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   isActive?: boolean;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   isSSTCertified?: boolean;
    /**
     * @type {Date}
     * @memberof TaxCodeModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof TaxCodeModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   modifiedUserId?: number;
 }