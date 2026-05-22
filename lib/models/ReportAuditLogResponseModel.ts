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
import { ReportAuditLogParametersModel } from "./ReportAuditLogParametersModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A model for displaying audit log report task metadata
 * @export
 * @class ReportAuditLogResponseModel
 */
 @JsonObject("ReportAuditLogResponseModel")
 export class ReportAuditLogResponseModel {
    /**
     * @type {number}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("reportType", String, true)
   reportType?: string | undefined = undefined;
    /**
     * @type {ReportAuditLogParametersModel}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("parameters", ReportAuditLogParametersModel, true)
   parameters?: ReportAuditLogParametersModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("size", Number, true)
   size?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("format", String, true)
   format?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("file", String, true)
   file?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("createdUser", String, true)
   createdUser?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("completedDate", DateConverter, true)
   completedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogResponseModel
     */
   @JsonProperty("reportSource", String, true)
   reportSource?: string | undefined = undefined;
 }