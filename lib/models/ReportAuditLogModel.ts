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
import { ReportAuditLogReportInputModel } from "./ReportAuditLogReportInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * An input model for requesting an export of audit logs
 * @export
 * @class ReportAuditLogModel
 */
 @JsonObject("ReportAuditLogModel")
 export class ReportAuditLogModel {
    /**
     * @type {string}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("reportType", String, true)
   reportType?: string | undefined = undefined;
    /**
     * @type {ReportAuditLogReportInputModel[]}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("reports", [ReportAuditLogReportInputModel], true)
   reports?: ReportAuditLogReportInputModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Enums.Compression}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("compression", Enums.CompressionConverter, true)
   compression?: Enums.Compression | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportAuditLogModel
     */
   @JsonProperty("reportSource", String, true)
   reportSource?: string | undefined = undefined;
 }