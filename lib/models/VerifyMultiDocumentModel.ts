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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Verify that a MultiDocument object matches the information in your accounting system.
            
If all attributes of the MultiDocument object match the values in your request, the
MultiDocument object will be moved to the document status `Posted`.
            
For more information on document status, see [DocumentStatus](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/DocumentStatus/).
 * @export
 * @interface VerifyMultiDocumentModel
 */
 export interface VerifyMultiDocumentModel {
    /**
     * @type {string}
     * @memberof VerifyMultiDocumentModel
     */
   code: string;
    /**
     * @type {Enums.DocumentType}
     * @memberof VerifyMultiDocumentModel
     */
   type: Enums.DocumentType;
    /**
     * @type {Date}
     * @memberof VerifyMultiDocumentModel
     */
   verifyTransactionDate?: Date;
    /**
     * @type {number}
     * @memberof VerifyMultiDocumentModel
     */
   verifyTotalAmount?: number;
    /**
     * @type {number}
     * @memberof VerifyMultiDocumentModel
     */
   verifyTotalTax?: number;
 }