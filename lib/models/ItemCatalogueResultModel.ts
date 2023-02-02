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
 * 
 * @export
 * @interface ItemCatalogueResultModel
 */
 export interface ItemCatalogueResultModel {
    /**
     * @type {number}
     * @memberof ItemCatalogueResultModel
     */
   itemId?: number;
    /**
     * @type {string}
     * @memberof ItemCatalogueResultModel
     */
   itemCode?: string;
    /**
     * @type {string}
     * @memberof ItemCatalogueResultModel
     */
   sourceEntityId?: string;
    /**
     * @type {Enums.ItemCatalogueResultEvent}
     * @memberof ItemCatalogueResultModel
     */
   itemEvent?: Enums.ItemCatalogueResultEvent;
    /**
     * @type {string[]}
     * @memberof ItemCatalogueResultModel
     */
   errors?: string[];
 }