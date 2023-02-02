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
 * Represents a tax code classification request output model
 * @export
 * @interface ItemTaxCodeClassificationRequestOutputModel
 */
 export interface ItemTaxCodeClassificationRequestOutputModel {
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   requestId?: number;
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   request?: string;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   status?: string;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   requestType?: string;
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   modifiedDate?: Date;
 }