/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * usage of system defined parameters.
 * @export
 * @interface ParameterUsageModel
 */
 export interface ParameterUsageModel {
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   parameterId?: number;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   productCode: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   region: string;
    /**
     * @type {number}
     * @memberof ParameterUsageModel
     */
   systemId?: number;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   taxTypeId: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   attributeType: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   dataType: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   helpText: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   label: string;
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   helpUrl: string;
    /**
     * @type {string[]}
     * @memberof ParameterUsageModel
     */
   values: string[];
    /**
     * @type {string}
     * @memberof ParameterUsageModel
     */
   measurementType: string;
 }