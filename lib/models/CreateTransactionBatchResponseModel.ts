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
 * Represents a create transaction batch response model.
 * @export
 * @interface CreateTransactionBatchResponseModel
 */
 export interface CreateTransactionBatchResponseModel {
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof CreateTransactionBatchResponseModel
     */
   name: string;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   companyId?: number;
    /**
     * @type {Enums.BatchStatus}
     * @memberof CreateTransactionBatchResponseModel
     */
   status?: Enums.BatchStatus;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   startedDate?: Date;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   recordCount?: number;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   currentRecord?: number;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   completedDate?: Date;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof CreateTransactionBatchResponseModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof CreateTransactionBatchResponseModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.BatchFileModel[]}
     * @memberof CreateTransactionBatchResponseModel
     */
   files: Models.BatchFileModel[];
 }