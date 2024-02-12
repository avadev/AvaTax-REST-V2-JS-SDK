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
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { ResourceFileUploadRequestModel } from "./ResourceFileUploadRequestModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents communication between Avalara and the company regarding the processing of a tax notice.
 * @export
 * @class NoticeCommentModel
 */
 @JsonObject("NoticeCommentModel")
 export class NoticeCommentModel {
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("noticeId", Number)
   noticeId: number = undefined;
    /**
     * @type {Date}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("date", DateConverter, true)
   date?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("comment", String, true)
   comment?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("commentUserId", Number, true)
   commentUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("commentUserName", String, true)
   commentUserName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("commentTypeId", Number, true)
   commentTypeId?: number | undefined = undefined;
    /**
     * @type {Enums.CommentType}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("commentType", Enums.CommentTypeConverter)
   commentType: Enums.CommentType = undefined;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("commentLink", String, true)
   commentLink?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("taxNoticeFileName", String, true)
   taxNoticeFileName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("resourceFileId", Number, true)
   resourceFileId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("documentId", Number, true)
   documentId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {ResourceFileUploadRequestModel}
     * @memberof NoticeCommentModel
     */
   @JsonProperty("attachmentUploadRequest", ResourceFileUploadRequestModel, true)
   attachmentUploadRequest?: ResourceFileUploadRequestModel | undefined = undefined;
 }