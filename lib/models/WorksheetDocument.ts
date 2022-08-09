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
 * @version    22.7.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * 
 * @export
 * @interface WorksheetDocument
 */
 export interface WorksheetDocument {
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   docCode: string;
    /**
     * @type {Date}
     * @memberof WorksheetDocument
     */
   docDate?: Date;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   totalExempt?: number;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   totalTaxable?: number;
    /**
     * @type {number}
     * @memberof WorksheetDocument
     */
   totalTax?: number;
    /**
     * @type {Models.WorksheetDocumentLine[]}
     * @memberof WorksheetDocument
     */
   lines: Models.WorksheetDocumentLine[];
    /**
     * @type {Models.Message[]}
     * @memberof WorksheetDocument
     */
   messages: Models.Message[];
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   resultCode: string;
    /**
     * @type {string}
     * @memberof WorksheetDocument
     */
   transactionId: string;
 }