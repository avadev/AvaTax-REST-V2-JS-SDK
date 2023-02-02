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
 * A model for return augmentations.
 * @export
 * @interface FilingAugmentationModel
 */
 export interface FilingAugmentationModel {
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   filingId?: number;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   fieldAmount: number;
    /**
     * @type {string}
     * @memberof FilingAugmentationModel
     */
   fieldName: string;
    /**
     * @type {Date}
     * @memberof FilingAugmentationModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FilingAugmentationModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   modifiedUserId?: number;
 }