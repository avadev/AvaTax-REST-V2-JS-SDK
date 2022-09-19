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
 * Model to create a new tax notice responsibility type.
 * @export
 * @interface CreateNoticeResponsibilityTypeModel
 */
 export interface CreateNoticeResponsibilityTypeModel {
    /**
     * @type {string}
     * @memberof CreateNoticeResponsibilityTypeModel
     */
   description: string;
    /**
     * @type {boolean}
     * @memberof CreateNoticeResponsibilityTypeModel
     */
   isActive?: boolean;
    /**
     * @type {number}
     * @memberof CreateNoticeResponsibilityTypeModel
     */
   sortOrder?: number;
 }