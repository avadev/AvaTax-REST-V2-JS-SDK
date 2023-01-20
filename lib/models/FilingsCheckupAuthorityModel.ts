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
 * Cycle Safe Expiration results.
 * @export
 * @interface FilingsCheckupAuthorityModel
 */
 export interface FilingsCheckupAuthorityModel {
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   taxAuthorityId?: number;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   locationCode?: string;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   taxAuthorityName?: string;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   taxAuthorityTypeId?: number;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   jurisdictionId?: number;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   tax?: number;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   taxTypeId?: string;
    /**
     * @type {Models.FilingsCheckupSuggestedFormModel[]}
     * @memberof FilingsCheckupAuthorityModel
     */
   suggestedForms?: Models.FilingsCheckupSuggestedFormModel[];
 }