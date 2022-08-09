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
 * A generic global advanced rule encapsulating a script
 * @export
 * @interface AdvancedRuleModel
 */
 export interface AdvancedRuleModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   ruleId: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   description: string;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleModel
     */
   arEntitlementRequired?: boolean;
    /**
     * @type {string}
     * @memberof AdvancedRuleModel
     */
   executionPosition: string;
 }