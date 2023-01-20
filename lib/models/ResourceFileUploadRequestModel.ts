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
 * A request to upload a file to Resource Files
 * @export
 * @interface ResourceFileUploadRequestModel
 */
 export interface ResourceFileUploadRequestModel {
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   content: string;
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   username?: string;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   name?: string;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   resourceFileTypeId?: number;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   length?: number;
 }