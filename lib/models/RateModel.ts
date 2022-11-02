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
 * Indicates one element of a sales tax rate.
 * @export
 * @interface RateModel
 */
 export interface RateModel {
    /**
     * @type {number}
     * @memberof RateModel
     */
   rate?: number;
    /**
     * @type {string}
     * @memberof RateModel
     */
   name?: string;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof RateModel
     */
   type?: Enums.JurisdictionType;
 }