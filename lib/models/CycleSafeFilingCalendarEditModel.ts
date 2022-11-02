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
 * Filing Calendar Edit
 * @export
 * @interface CycleSafeFilingCalendarEditModel
 */
 export interface CycleSafeFilingCalendarEditModel {
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   fieldName?: string;
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   destination?: string;
    /**
     * @type {number}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   questionId?: number;
    /**
     * @type {string}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   questionCode?: string;
    /**
     * @type {object}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   oldValue: object;
    /**
     * @type {object}
     * @memberof CycleSafeFilingCalendarEditModel
     */
   newValue: object;
 }