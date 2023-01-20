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
 * Represents a Premium Classification output model associated with an item's SystemCode..
 * @export
 * @interface ItemPremiumClassificationOutputModel
 */
 export interface ItemPremiumClassificationOutputModel {
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   id?: string;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   itemCode?: string;
    /**
     * @type {number}
     * @memberof ItemPremiumClassificationOutputModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   hsCode?: string;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   systemCode?: string;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   justification?: string;
    /**
     * @type {Date}
     * @memberof ItemPremiumClassificationOutputModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof ItemPremiumClassificationOutputModel
     */
   createdUserId?: number;
 }