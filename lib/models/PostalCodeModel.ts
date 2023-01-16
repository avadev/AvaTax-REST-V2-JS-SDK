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
 * Represents a PostalCode and its associated data like: country, region, effective dates, etc.
 * @export
 * @interface PostalCodeModel
 */
 export interface PostalCodeModel {
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   region?: string;
    /**
     * @type {number}
     * @memberof PostalCodeModel
     */
   taxRegionId?: number;
    /**
     * @type {Date}
     * @memberof PostalCodeModel
     */
   effDate?: Date;
    /**
     * @type {Date}
     * @memberof PostalCodeModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof PostalCodeModel
     */
   postalCode?: string;
 }