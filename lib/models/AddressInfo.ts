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
 * Represents a base address element.
 * @export
 * @interface AddressInfo
 */
 export interface AddressInfo {
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   line1: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   line2: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   line3: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   city: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   region: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   country: string;
    /**
     * @type {string}
     * @memberof AddressInfo
     */
   postalCode: string;
    /**
     * @type {number}
     * @memberof AddressInfo
     */
   latitude?: number;
    /**
     * @type {number}
     * @memberof AddressInfo
     */
   longitude?: number;
 }