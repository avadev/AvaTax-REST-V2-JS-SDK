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
 * Represents a parameter associated with an item.
 * @export
 * @interface ItemRestrictionInputModel
 */
 export interface ItemRestrictionInputModel {
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   itemCode: string;
    /**
     * @type {number}
     * @memberof ItemRestrictionInputModel
     */
   companyId: number;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   hsCode: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   countryOfImport: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   countryOfExport: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   countryOfManufacture: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   restrictionType: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   regulation: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   governmentAgency: string;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   complianceMessage: string;
 }