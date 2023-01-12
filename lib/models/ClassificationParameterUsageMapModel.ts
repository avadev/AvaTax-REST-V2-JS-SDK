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
 * usage of system defined parameters.
 * @export
 * @interface ClassificationParameterUsageMapModel
 */
 export interface ClassificationParameterUsageMapModel {
    /**
     * @type {number}
     * @memberof ClassificationParameterUsageMapModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ClassificationParameterUsageMapModel
     */
   parameterId?: number;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   taxTypeGroupId?: string;
    /**
     * @type {Enums.Visibility}
     * @memberof ClassificationParameterUsageMapModel
     */
   visibility?: Enums.Visibility;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   attributeType?: string;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   dataType?: string;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   helpText?: string;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   label?: string;
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   helpUrl?: string;
    /**
     * @type {string[]}
     * @memberof ClassificationParameterUsageMapModel
     */
   values: string[];
    /**
     * @type {string}
     * @memberof ClassificationParameterUsageMapModel
     */
   measurementType?: string;
 }