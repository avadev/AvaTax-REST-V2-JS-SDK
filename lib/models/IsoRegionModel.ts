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
 * @version    22.9.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a region, province, or state within a country
 * @export
 * @interface IsoRegionModel
 */
 export interface IsoRegionModel {
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   countryCode: string;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   classification: string;
    /**
     * @type {boolean}
     * @memberof IsoRegionModel
     */
   streamlinedSalesTax?: boolean;
    /**
     * @type {Models.IsoLocalizedName[]}
     * @memberof IsoRegionModel
     */
   localizedNames: Models.IsoLocalizedName[];
    /**
     * @type {boolean}
     * @memberof IsoRegionModel
     */
   isRegionTaxable?: boolean;
 }