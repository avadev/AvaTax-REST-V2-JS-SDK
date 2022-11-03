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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * usage of system defined parameters for returns.
 * @export
 * @interface ReturnsParameterUsageModel
 */
 export interface ReturnsParameterUsageModel {
    /**
     * @type {number}
     * @memberof ReturnsParameterUsageModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ReturnsParameterUsageModel
     */
   parameterId?: number;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   productCode?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   taxTypeId?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   attributeType?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   dataType?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   helpText?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   label?: string;
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   helpUrl?: string;
    /**
     * @type {string[]}
     * @memberof ReturnsParameterUsageModel
     */
   values: string[];
    /**
     * @type {string}
     * @memberof ReturnsParameterUsageModel
     */
   measurementType?: string;
 }