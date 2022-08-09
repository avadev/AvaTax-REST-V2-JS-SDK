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
 * TextCase info for input address
 * @export
 * @interface AddressValidationInfo
 */
 export interface AddressValidationInfo {
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   line1: string;
    /**
     * @type {Enums.TextCase}
     * @memberof AddressValidationInfo
     */
   textCase?: Enums.TextCase;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   line2: string;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   line3: string;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   city: string;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   region: string;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   country: string;
    /**
     * @type {string}
     * @memberof AddressValidationInfo
     */
   postalCode: string;
    /**
     * @type {number}
     * @memberof AddressValidationInfo
     */
   latitude?: number;
    /**
     * @type {number}
     * @memberof AddressValidationInfo
     */
   longitude?: number;
 }