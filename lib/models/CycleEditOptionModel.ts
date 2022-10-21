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
 * Model with options for actual filing calendar output based on user edits to filing calendar.
 * @export
 * @interface CycleEditOptionModel
 */
 export interface CycleEditOptionModel {
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   success?: boolean;
    /**
     * @type {string}
     * @memberof CycleEditOptionModel
     */
   message: string;
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   customerMustApprove?: boolean;
    /**
     * @type {boolean}
     * @memberof CycleEditOptionModel
     */
   mustCloneFilingCalendar?: boolean;
    /**
     * @type {Date}
     * @memberof CycleEditOptionModel
     */
   clonedCalendarEffDate?: Date;
    /**
     * @type {Date}
     * @memberof CycleEditOptionModel
     */
   expiredCalendarEndDate?: Date;
 }