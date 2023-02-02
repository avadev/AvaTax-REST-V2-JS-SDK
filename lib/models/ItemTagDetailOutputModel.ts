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
 * Represents a tag for an item in your company's product catalog.
 * @export
 * @interface ItemTagDetailOutputModel
 */
 export interface ItemTagDetailOutputModel {
    /**
     * @type {string}
     * @memberof ItemTagDetailOutputModel
     */
   tagName: string;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   itemId?: number;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   itemTagDetailId?: number;
    /**
     * @type {number}
     * @memberof ItemTagDetailOutputModel
     */
   tagId?: number;
    /**
     * @type {Date}
     * @memberof ItemTagDetailOutputModel
     */
   createdDate?: Date;
 }