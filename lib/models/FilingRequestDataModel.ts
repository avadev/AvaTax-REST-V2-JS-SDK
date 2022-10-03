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
 * Represents a commitment to file a tax return on a recurring basis.
Only used if you subscribe to Avalara Returns.
 * @export
 * @interface FilingRequestDataModel
 */
 export interface FilingRequestDataModel {
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   companyReturnId?: number;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   returnName: string;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   taxFormCode: string;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingRequestDataModel
     */
   filingFrequencyId: Enums.FilingFrequencyId;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   registrationId: string;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   months: number;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   fiscalYearStartMonth?: number;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof FilingRequestDataModel
     */
   taxTypeId?: Enums.MatchingTaxType;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   locationCode: string;
    /**
     * @type {Date}
     * @memberof FilingRequestDataModel
     */
   effDate: Date;
    /**
     * @type {Date}
     * @memberof FilingRequestDataModel
     */
   endDate?: Date;
    /**
     * @type {boolean}
     * @memberof FilingRequestDataModel
     */
   isClone?: boolean;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   region: string;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   taxAuthorityId?: number;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   taxAuthorityName: string;
    /**
     * @type {Models.FilingAnswerModel[]}
     * @memberof FilingRequestDataModel
     */
   answers: Models.FilingAnswerModel[];
 }