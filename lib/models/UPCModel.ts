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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * One Universal Product Code object as defined for your company.
 * @export
 * @interface UPCModel
 */
 export interface UPCModel {
    /**
     * @type {number}
     * @memberof UPCModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   upc: string;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   legacyTaxCode?: string;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   description: string;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   endDate?: Date;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   usage?: number;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   isSystem?: number;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   modifiedUserId?: number;
 }