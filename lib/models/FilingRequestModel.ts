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
 * @interface FilingRequestModel
 */
 export interface FilingRequestModel {
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   companyId: number;
    /**
     * @type {Enums.FilingRequestStatus}
     * @memberof FilingRequestModel
     */
   filingRequestStatusId?: Enums.FilingRequestStatus;
    /**
     * @type {Models.FilingRequestDataModel}
     * @memberof FilingRequestModel
     */
   data: Models.FilingRequestDataModel;
    /**
     * @type {Date}
     * @memberof FilingRequestModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingRequestModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   modifiedUserId?: number;
 }