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
 * Represents an item in your company's product catalog.
 * @export
 * @interface ItemModel
 */
 export interface ItemModel {
    /**
     * @type {number}
     * @memberof ItemModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   itemCode: string;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   taxCodeId?: number;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   taxCode: string;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   itemGroup: string;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   category: string;
    /**
     * @type {Date}
     * @memberof ItemModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof ItemModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof ItemModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   source: string;
    /**
     * @type {string}
     * @memberof ItemModel
     */
   upc: string;
    /**
     * @type {Models.ClassificationModel[]}
     * @memberof ItemModel
     */
   classifications: Models.ClassificationModel[];
    /**
     * @type {Models.ItemParameterModel[]}
     * @memberof ItemModel
     */
   parameters: Models.ItemParameterModel[];
    /**
     * @type {Models.ItemTagDetailModel[]}
     * @memberof ItemModel
     */
   tags: Models.ItemTagDetailModel[];
 }