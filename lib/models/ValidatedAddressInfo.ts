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
 * Represents a validated address
 * @export
 * @interface ValidatedAddressInfo
 */
 export interface ValidatedAddressInfo {
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   addressType: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   line1: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   line2: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   line3: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   city: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   region: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   country: string;
    /**
     * @type {string}
     * @memberof ValidatedAddressInfo
     */
   postalCode: string;
    /**
     * @type {number}
     * @memberof ValidatedAddressInfo
     */
   latitude?: number;
    /**
     * @type {number}
     * @memberof ValidatedAddressInfo
     */
   longitude?: number;
 }