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
 * The "Unit of Measurement" model captures information about a type of measurement.  Types of measurement refer to
different scales for the same dimension.  For example, measurements of type "Distance" may include units of measurement
such as meters, feet, inches, and miles.
 * @export
 * @interface UomModel
 */
 export interface UomModel {
    /**
     * @type {number}
     * @memberof UomModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof UomModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof UomModel
     */
   shortDesc: string;
    /**
     * @type {string}
     * @memberof UomModel
     */
   description: string;
    /**
     * @type {number}
     * @memberof UomModel
     */
   measurementTypeId?: number;
    /**
     * @type {string}
     * @memberof UomModel
     */
   measurementTypeCode: string;
    /**
     * @type {string}
     * @memberof UomModel
     */
   siUOM: string;
    /**
     * @type {string}
     * @memberof UomModel
     */
   measurementTypeDescription: string;
    /**
     * @type {boolean}
     * @memberof UomModel
     */
   isSiUom?: boolean;
 }