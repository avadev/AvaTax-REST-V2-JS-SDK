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
 * Error Transaction Model
 * @export
 * @interface ErrorTransactionOutputModel
 */
 export interface ErrorTransactionOutputModel {
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   errorCode: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   errorMessage: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   avataxErrorJson: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   avataxCreateTransactionJson: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   datasource: string;
    /**
     * @type {Date}
     * @memberof ErrorTransactionOutputModel
     */
   documentDate?: Date;
    /**
     * @type {Date}
     * @memberof ErrorTransactionOutputModel
     */
   expiresAt?: Date;
    /**
     * @type {number}
     * @memberof ErrorTransactionOutputModel
     */
   amount?: number;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   datasourceSource: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   shipToCountry: string;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   shipToRegion: string;
    /**
     * @type {Enums.DocumentType}
     * @memberof ErrorTransactionOutputModel
     */
   documentType: Enums.DocumentType;
    /**
     * @type {string}
     * @memberof ErrorTransactionOutputModel
     */
   documentCode: string;
 }