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
 * An abridged item model used for syncing product catalogs with AvaTax.
 * @export
 * @interface ItemSyncModel
 */
 export interface ItemSyncModel {
    /**
     * @type {string}
     * @memberof ItemSyncModel
     */
   itemCode: string;
    /**
     * @type {string}
     * @memberof ItemSyncModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof ItemSyncModel
     */
   itemGroup: string;
    /**
     * @type {string}
     * @memberof ItemSyncModel
     */
   taxCode: string;
 }