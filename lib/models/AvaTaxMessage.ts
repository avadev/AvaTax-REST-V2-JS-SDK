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
 * Informational or warning messages returned by AvaTax with a transaction
 * @export
 * @interface AvaTaxMessage
 */
 export interface AvaTaxMessage {
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   summary?: string;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   details?: string;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   refersTo?: string;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   severity?: string;
    /**
     * @type {string}
     * @memberof AvaTaxMessage
     */
   source?: string;
 }