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
 * @version    22.9.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Model for Advanced Rules when full details are requested
 * @export
 * @interface AdvancedRuleFullDetailsModel
 */
 export interface AdvancedRuleFullDetailsModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   script: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   customerDataValidatorScript: string;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   isApproved?: boolean;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   createdBy: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   createdOn: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   modifiedBy: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   modifiedOn: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   approvedBy: string;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   isSystemRule?: boolean;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   isVisibleInCUP?: boolean;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   isTest?: boolean;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   customerDataSchema: string;
    /**
     * @type {number}
     * @memberof AdvancedRuleFullDetailsModel
     */
   version?: number;
    /**
     * @type {number[]}
     * @memberof AdvancedRuleFullDetailsModel
     */
   accountsVisibleFor: number[];
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   ruleId: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   description: string;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleFullDetailsModel
     */
   arEntitlementRequired?: boolean;
    /**
     * @type {string}
     * @memberof AdvancedRuleFullDetailsModel
     */
   executionPosition: string;
 }