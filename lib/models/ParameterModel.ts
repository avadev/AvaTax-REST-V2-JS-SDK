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
 * An extra property that can change the behavior of tax transactions.
 * @export
 * @interface ParameterModel
 */
 export interface ParameterModel {
    /**
     * @type {number}
     * @memberof ParameterModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   category: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   dataType: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   helpText: string;
    /**
     * @type {string[]}
     * @memberof ParameterModel
     */
   serviceTypes: string[];
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   prompt: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   regularExpression: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   label: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   helpUrl: string;
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   attributeType: string;
    /**
     * @type {string[]}
     * @memberof ParameterModel
     */
   values: string[];
    /**
     * @type {string}
     * @memberof ParameterModel
     */
   measurementType: string;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   isNeededForCalculation?: boolean;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   isNeededForReturns?: boolean;
    /**
     * @type {boolean}
     * @memberof ParameterModel
     */
   isNeededForClassification?: boolean;
 }