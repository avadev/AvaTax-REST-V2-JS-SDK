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
 * Represents a parameter associated with an item.
 * @export
 * @interface ItemRestrictionOutputModel
 */
 export interface ItemRestrictionOutputModel {
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   id?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   countryOfImport?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   countryOfExport?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   countryOfManufacture?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   hsCode?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   itemCode?: string;
    /**
     * @type {number}
     * @memberof ItemRestrictionOutputModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   restrictionType?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   regulation?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   governmentAgency?: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   complianceMessage?: string;
    /**
     * @type {Date}
     * @memberof ItemRestrictionOutputModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof ItemRestrictionOutputModel
     */
   createdUserId?: number;
 }