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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Model representing a lookup file for a company
 * @export
 * @interface AdvancedRuleLookupFileModel
 */
 export interface AdvancedRuleLookupFileModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   lookupFileId?: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   id?: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   content: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   fileExtension: string;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleLookupFileModel
     */
   isTest?: boolean;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleLookupFileModel
     */
   inUse?: boolean;
    /**
     * @type {number}
     * @memberof AdvancedRuleLookupFileModel
     */
   version?: number;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   createdDate?: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   modifiedDate?: string;
 }