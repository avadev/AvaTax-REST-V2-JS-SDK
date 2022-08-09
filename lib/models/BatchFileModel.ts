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
 * Represents one file in a batch upload.
 * @export
 * @interface BatchFileModel
 */
 export interface BatchFileModel {
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   batchId?: number;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   content: string;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   contentLength?: number;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   contentType: string;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   fileExtension: string;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   filePath: string;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   errorCount?: number;
 }