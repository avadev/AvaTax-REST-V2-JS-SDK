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
 * Represents estimated financial results from responding to a tax notice.
 * @export
 * @interface NoticeFinanceModel
 */
 export interface NoticeFinanceModel {
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   noticeId?: number;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   noticeDate?: Date;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   dueDate?: Date;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   noticeNumber?: string;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   taxDue?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   penalty?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   interest?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   credits?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   taxAbated?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   customerPenalty?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   customerInterest?: number;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   cspFeeRefund?: number;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   fileName?: string;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   paymentMethod?: string;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   resourceFileId?: number;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.ResourceFileUploadRequestModel}
     * @memberof NoticeFinanceModel
     */
   attachmentUploadRequest: Models.ResourceFileUploadRequestModel;
 }