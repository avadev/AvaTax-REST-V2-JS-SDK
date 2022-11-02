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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * An input model for executing a report detailed to the document line level
 * @export
 * @interface ExportDocumentLineModel
 */
 export interface ExportDocumentLineModel {
    /**
     * @type {Enums.ReportFormat}
     * @memberof ExportDocumentLineModel
     */
   format?: Enums.ReportFormat;
    /**
     * @type {Date}
     * @memberof ExportDocumentLineModel
     */
   startDate?: Date;
    /**
     * @type {Date}
     * @memberof ExportDocumentLineModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   state?: string;
    /**
     * @type {Enums.ReportDateFilter}
     * @memberof ExportDocumentLineModel
     */
   dateFilter?: Enums.ReportDateFilter;
    /**
     * @type {Enums.ReportDocType}
     * @memberof ExportDocumentLineModel
     */
   docType?: Enums.ReportDocType;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   currencyCode?: string;
    /**
     * @type {number}
     * @memberof ExportDocumentLineModel
     */
   numberOfPartitions?: number;
    /**
     * @type {number}
     * @memberof ExportDocumentLineModel
     */
   partition?: number;
    /**
     * @type {boolean}
     * @memberof ExportDocumentLineModel
     */
   isLocked?: boolean;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   merchantSellerIdentifier?: string;
    /**
     * @type {Enums.DocumentStatus}
     * @memberof ExportDocumentLineModel
     */
   documentStatus?: Enums.DocumentStatus;
    /**
     * @type {boolean}
     * @memberof ExportDocumentLineModel
     */
   isModifiedDateSameAsDocumentDate?: boolean;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   taxGroup?: string;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   taxName?: string;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   taxCode?: string;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   customerVendorCode?: string;
    /**
     * @type {string}
     * @memberof ExportDocumentLineModel
     */
   taxSubType?: string;
    /**
     * @type {Enums.ReportSource}
     * @memberof ExportDocumentLineModel
     */
   reportSource?: Enums.ReportSource;
 }