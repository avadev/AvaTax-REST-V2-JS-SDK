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
 * Represents an address to resolve.
 * @export
 * @interface AddressLocationInfo
 */
 export interface AddressLocationInfo {
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   locationCode?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   line1?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   line3?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   city?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   region?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   country?: string;
    /**
     * @type {string}
     * @memberof AddressLocationInfo
     */
   postalCode?: string;
    /**
     * @type {number}
     * @memberof AddressLocationInfo
     */
   latitude?: number;
    /**
     * @type {number}
     * @memberof AddressLocationInfo
     */
   longitude?: number;
 }