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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Response model of a single error transaction delete
 * @export
 * @interface DeleteErrorTransactionResponseModel
 */
 export interface DeleteErrorTransactionResponseModel {
    /**
     * @type {Enums.AvataxDeleteErrorTransactionStatus}
     * @memberof DeleteErrorTransactionResponseModel
     */
   result?: Enums.AvataxDeleteErrorTransactionStatus;
    /**
     * @type {Enums.DocumentType}
     * @memberof DeleteErrorTransactionResponseModel
     */
   documentType: Enums.DocumentType;
    /**
     * @type {string}
     * @memberof DeleteErrorTransactionResponseModel
     */
   documentCode: string;
 }