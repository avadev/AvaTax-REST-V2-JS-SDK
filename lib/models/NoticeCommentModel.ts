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
 * Represents communication between Avalara and the company regarding the processing of a tax notice.
 * @export
 * @interface NoticeCommentModel
 */
 export interface NoticeCommentModel {
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   noticeId: number;
    /**
     * @type {Date}
     * @memberof NoticeCommentModel
     */
   date?: Date;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   comment?: string;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   commentUserId?: number;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   commentUserName?: string;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   commentTypeId?: number;
    /**
     * @type {Enums.CommentType}
     * @memberof NoticeCommentModel
     */
   commentType: Enums.CommentType;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   commentLink?: string;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   taxNoticeFileName?: string;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   resourceFileId?: number;
    /**
     * @type {Date}
     * @memberof NoticeCommentModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.ResourceFileUploadRequestModel}
     * @memberof NoticeCommentModel
     */
   attachmentUploadRequest: Models.ResourceFileUploadRequestModel;
 }