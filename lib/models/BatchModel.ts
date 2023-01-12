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
 * Represents a batch of uploaded documents.
 * @export
 * @interface BatchModel
 */
 export interface BatchModel {
    /**
     * @type {Enums.BatchType}
     * @memberof BatchModel
     */
   type: Enums.BatchType;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   batchAgent?: string;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   options?: string;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof BatchModel
     */
   name: string;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   companyId?: number;
    /**
     * @type {Enums.BatchStatus}
     * @memberof BatchModel
     */
   status?: Enums.BatchStatus;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   startedDate?: Date;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   recordCount?: number;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   currentRecord?: number;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   completedDate?: Date;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof BatchModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof BatchModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.BatchFileModel[]}
     * @memberof BatchModel
     */
   files: Models.BatchFileModel[];
 }