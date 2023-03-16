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
import { ReportParametersModel } from "./ReportParametersModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A model for displaying report task metadata
 * @export
 * @class ReportModel
 */
 @JsonObject("ReportModel")
 export class ReportModel {
    /**
     * @type {number}
     * @memberof ReportModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   @JsonProperty("reportType", String, true)
   reportType?: string | undefined = undefined;
    /**
     * @type {ReportParametersModel}
     * @memberof ReportModel
     */
   @JsonProperty("parameters", ReportParametersModel, true)
   parameters?: ReportParametersModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   @JsonProperty("size", Number, true)
   size?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   @JsonProperty("format", String, true)
   format?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   @JsonProperty("file", String, true)
   file?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportModel
     */
   @JsonProperty("createdUser", String, true)
   createdUser?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportModel
     */
   @JsonProperty("completedDate", DateConverter, true)
   completedDate?: Date | undefined = undefined;
 }