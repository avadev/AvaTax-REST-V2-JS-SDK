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
 * Represents estimated financial results from responding to a tax notice.
 * @export
 * @class NoticeFinanceModel
 */
 @JsonObject("NoticeFinanceModel")
 export class NoticeFinanceModel {
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("noticeId", Number, true)
   noticeId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("noticeDate", DateConverter, true)
   noticeDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("dueDate", DateConverter, true)
   dueDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("noticeNumber", String, true)
   noticeNumber?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("taxDue", Number, true)
   taxDue?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("penalty", Number, true)
   penalty?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("interest", Number, true)
   interest?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("credits", Number, true)
   credits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("taxAbated", Number, true)
   taxAbated?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("customerPenalty", Number, true)
   customerPenalty?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("customerInterest", Number, true)
   customerInterest?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("cspFeeRefund", Number, true)
   cspFeeRefund?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("fileName", String, true)
   fileName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("paymentMethod", String, true)
   paymentMethod?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("resourceFileId", Number, true)
   resourceFileId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {ResourceFileUploadRequestModel}
     * @memberof NoticeFinanceModel
     */
   @JsonProperty("attachmentUploadRequest", ResourceFileUploadRequestModel, true)
   attachmentUploadRequest?: ResourceFileUploadRequestModel | undefined = undefined;
 }