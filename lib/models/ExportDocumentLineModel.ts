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
 * An input model for executing a report detailed to the document line level
 * @export
 * @class ExportDocumentLineModel
 */
 @JsonObject("ExportDocumentLineModel")
 export class ExportDocumentLineModel {
    /**
     * @type {Enums.ReportFormat}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("format", Enums.ReportFormatConverter, true)
   format?: Enums.ReportFormat | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("startDate", DateConverter, true)
   startDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {Enums.ReportDateFilter}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("dateFilter", Enums.ReportDateFilterConverter, true)
   dateFilter?: Enums.ReportDateFilter | undefined = undefined;
    /**
     * @type {Enums.ReportDocType}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("docType", Enums.ReportDocTypeConverter, true)
   docType?: Enums.ReportDocType | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("numberOfPartitions", Number, true)
   numberOfPartitions?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("partition", Number, true)
   partition?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("isLocked", Boolean, true)
   isLocked?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("merchantSellerIdentifier", String, true)
   merchantSellerIdentifier?: string | undefined = undefined;
    /**
     * @type {Enums.DocumentStatus}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("documentStatus", Enums.DocumentStatusConverter, true)
   documentStatus?: Enums.DocumentStatus | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("isModifiedDateSameAsDocumentDate", Boolean, true)
   isModifiedDateSameAsDocumentDate?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("taxGroup", String, true)
   taxGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("customerVendorCode", String, true)
   customerVendorCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {Enums.ReportSource}
     * @memberof ExportDocumentLineModel
     */
   @JsonProperty("reportSource", Enums.ReportSourceConverter, true)
   reportSource?: Enums.ReportSource | undefined = undefined;
 }