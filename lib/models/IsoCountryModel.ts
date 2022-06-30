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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents an ISO 3166 recognized country
 * @export
 * @interface IsoCountryModel
 */
 export interface IsoCountryModel {
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   alpha3Code: string;
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   name: string;
    /**
     * @type {boolean}
     * @memberof IsoCountryModel
     */
   isEuropeanUnion?: boolean;
    /**
     * @type {Models.IsoLocalizedName[]}
     * @memberof IsoCountryModel
     */
   localizedNames: Models.IsoLocalizedName[];
    /**
     * @type {boolean}
     * @memberof IsoCountryModel
     */
   addressesRequireRegion?: boolean;
 }