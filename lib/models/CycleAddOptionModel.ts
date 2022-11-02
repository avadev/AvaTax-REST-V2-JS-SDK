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
 * Model with options for adding a new filing calendar
 * @export
 * @interface CycleAddOptionModel
 */
 export interface CycleAddOptionModel {
    /**
     * @type {boolean}
     * @memberof CycleAddOptionModel
     */
   available?: boolean;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   transactionalPeriodStart?: Date;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   transactionalPeriodEnd?: Date;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   filingDueDate?: Date;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   cycleName?: string;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   frequencyName?: string;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   filingFrequencyCode?: string;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof CycleAddOptionModel
     */
   filingFrequencyId?: Enums.FilingFrequencyId;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   cycleUnavailableReason?: string;
    /**
     * @type {string[]}
     * @memberof CycleAddOptionModel
     */
   availableLocationCodes: string[];
 }