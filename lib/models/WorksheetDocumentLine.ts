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
 * @interface WorksheetDocumentLine
 */
 export interface WorksheetDocumentLine {
    /**
     * @type {Date}
     * @memberof WorksheetDocumentLine
     */
   reportingDate?: Date;
    /**
     * @type {string}
     * @memberof WorksheetDocumentLine
     */
   lineNo: string;
    /**
     * @type {number}
     * @memberof WorksheetDocumentLine
     */
   lineAmount?: number;
    /**
     * @type {number}
     * @memberof WorksheetDocumentLine
     */
   exemptAmount?: number;
    /**
     * @type {number}
     * @memberof WorksheetDocumentLine
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof WorksheetDocumentLine
     */
   taxAmount?: number;
    /**
     * @type {Models.Message[]}
     * @memberof WorksheetDocumentLine
     */
   messages: Models.Message[];
    /**
     * @type {string}
     * @memberof WorksheetDocumentLine
     */
   resultCode: string;
    /**
     * @type {string}
     * @memberof WorksheetDocumentLine
     */
   transactionId: string;
 }