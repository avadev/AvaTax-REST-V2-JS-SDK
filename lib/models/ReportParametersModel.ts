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
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The output model for report parameter definitions
 * @export
 * @class ReportParametersModel
 */
 @JsonObject("ReportParametersModel")
 export class ReportParametersModel {
    /**
     * @type {Date}
     * @memberof ReportParametersModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ReportParametersModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("dateFilter", String, true)
   dateFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("docType", String, true)
   docType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("dateFormat", String, true)
   dateFormat?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportParametersModel
     */
   @JsonProperty("numberOfPartitions", Number, true)
   numberOfPartitions?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ReportParametersModel
     */
   @JsonProperty("partition", Number, true)
   partition?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ReportParametersModel
     */
   @JsonProperty("isLocked", Boolean, true)
   isLocked?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("merchantSellerId", String, true)
   merchantSellerId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("documentStatus", String, true)
   documentStatus?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ReportParametersModel
     */
   @JsonProperty("isModifiedDateSameAsDocumentDate", Boolean, true)
   isModifiedDateSameAsDocumentDate?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("taxGroup", String, true)
   taxGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("customerVendorCode", String, true)
   customerVendorCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ReportParametersModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {Enums.Compression}
     * @memberof ReportParametersModel
     */
   @JsonProperty("compression", Enums.CompressionConverter, true)
   compression?: Enums.Compression | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ReportParametersModel
     */
   @JsonProperty("includeDocumentLineDetails", Boolean, true)
   includeDocumentLineDetails?: boolean | undefined = undefined;
 }