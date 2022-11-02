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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a tax rule product detail that changes the behavior of Avalara's tax engine for certain tax rules.
            
Avalara supports a two types of tax product detail.  For information about tax rule Product Types
HSCode and TaxCode
            
Because different types of tax rules have different behavior, some fields may change their behavior based on
the type of tax rule selected.  Please read the documentation for each field carefully and ensure that
the value you send is appropriate for the type of tax rule.
 * @export
 * @interface TaxRuleProductDetailModel
 */
 export interface TaxRuleProductDetailModel {
    /**
     * @type {number}
     * @memberof TaxRuleProductDetailModel
     */
   taxRuleProductDetailId?: number;
    /**
     * @type {number}
     * @memberof TaxRuleProductDetailModel
     */
   taxRuleId?: number;
    /**
     * @type {string}
     * @memberof TaxRuleProductDetailModel
     */
   productCode?: string;
    /**
     * @type {Date}
     * @memberof TaxRuleProductDetailModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof TaxRuleProductDetailModel
     */
   endDate?: Date;
    /**
     * @type {number}
     * @memberof TaxRuleProductDetailModel
     */
   systemId?: number;
 }