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
 * Represents information about a tax form known to Avalara
 * @export
 * @interface AvaFileFormModel
 */
 export interface AvaFileFormModel {
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   returnName: string;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   formName: string;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   description: string;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   effDate?: Date;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   country: string;
    /**
     * @type {Enums.FormTypeId}
     * @memberof AvaFileFormModel
     */
   formTypeId?: Enums.FormTypeId;
    /**
     * @type {Enums.FilingOptionTypeId}
     * @memberof AvaFileFormModel
     */
   filingOptionTypeId?: Enums.FilingOptionTypeId;
    /**
     * @type {Enums.DueDateTypeId}
     * @memberof AvaFileFormModel
     */
   dueDateTypeId?: Enums.DueDateTypeId;
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   dueDay?: number;
    /**
     * @type {Enums.DueDateTypeId}
     * @memberof AvaFileFormModel
     */
   efileDueDateTypeId?: Enums.DueDateTypeId;
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   efileDueDay?: number;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   efileDueTime?: Date;
    /**
     * @type {boolean}
     * @memberof AvaFileFormModel
     */
   hasVendorDiscount?: boolean;
    /**
     * @type {Enums.RoundingTypeId}
     * @memberof AvaFileFormModel
     */
   roundingTypeId?: Enums.RoundingTypeId;
    /**
     * @type {Enums.OutletTypeId}
     * @memberof AvaFileFormModel
     */
   outletTypeId?: Enums.OutletTypeId;
 }