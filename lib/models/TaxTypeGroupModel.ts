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
 * Represents a tax type group
 * @export
 * @interface TaxTypeGroupModel
 */
 export interface TaxTypeGroupModel {
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   taxTypeGroup?: string;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   description?: string;
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   subscriptionTypeId?: number;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   subscriptionDescription?: string;
    /**
     * @type {string}
     * @memberof TaxTypeGroupModel
     */
   tabName?: string;
    /**
     * @type {boolean}
     * @memberof TaxTypeGroupModel
     */
   showColumn?: boolean;
    /**
     * @type {number}
     * @memberof TaxTypeGroupModel
     */
   displaySequence?: number;
 }