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
import { ReportAuditLogOperationModel } from "./ReportAuditLogOperationModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The output model for audit log report parameter definitions.
 * @export
 * @class ReportAuditLogParametersModel
 */
 @JsonObject("ReportAuditLogParametersModel")
 export class ReportAuditLogParametersModel {
    /**
     * @type {ReportAuditLogOperationModel[]}
     * @memberof ReportAuditLogParametersModel
     */
   @JsonProperty("operations", [ReportAuditLogOperationModel], true)
   operations?: ReportAuditLogOperationModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogParametersModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportAuditLogParametersModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Enums.Compression}
     * @memberof ReportAuditLogParametersModel
     */
   @JsonProperty("compression", Enums.CompressionConverter, true)
   compression?: Enums.Compression | undefined = undefined;
 }