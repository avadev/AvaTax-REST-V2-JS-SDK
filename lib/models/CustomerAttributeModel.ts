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
 * A Customer's linked attribute denoting what features applied to the customer. A customer can
be linked to multiple customer attributes and vice versa.
 * @export
 * @interface CustomerAttributeModel
 */
 export interface CustomerAttributeModel {
    /**
     * @type {number}
     * @memberof CustomerAttributeModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof CustomerAttributeModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof CustomerAttributeModel
     */
   description: string;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   isSystemCode?: boolean;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   isNonDeliver?: boolean;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   isChangeable?: boolean;
 }