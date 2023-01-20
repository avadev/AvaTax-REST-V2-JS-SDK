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
 * Model representing an execution of an advanced rule for a company
 * @export
 * @interface AdvancedRuleExecutionModel
 */
 export interface AdvancedRuleExecutionModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   ruleExecutionId?: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   name: string;
    /**
     * @type {Date}
     * @memberof AdvancedRuleExecutionModel
     */
   startDate?: Date;
    /**
     * @type {Date}
     * @memberof AdvancedRuleExecutionModel
     */
   endDate?: Date;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleExecutionModel
     */
   enabled?: boolean;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleExecutionModel
     */
   continueOnError?: boolean;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   ruleId: string;
    /**
     * @type {Models.AdvancedRuleModel}
     * @memberof AdvancedRuleExecutionModel
     */
   rule?: Models.AdvancedRuleModel;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   customerData?: string;
    /**
     * @type {string}
     * @memberof AdvancedRuleExecutionModel
     */
   customerDataId?: string;
 }