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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A MultiDocument transaction represents a sale or purchase that occurred between more than two companies.
            
A traditional transaction requires exactly two parties: a seller and a buyer.  MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction.  Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document.  This separation of documents allows each seller to file their taxes separately.
 * @export
 * @interface MultiDocumentModel
 */
 export interface MultiDocumentModel {
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   accountId?: number;
    /**
     * @type {string}
     * @memberof MultiDocumentModel
     */
   code?: string;
    /**
     * @type {Enums.DocumentType}
     * @memberof MultiDocumentModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof MultiDocumentModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof MultiDocumentModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof MultiDocumentModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.TransactionModel[]}
     * @memberof MultiDocumentModel
     */
   documents?: Models.TransactionModel[];
 }