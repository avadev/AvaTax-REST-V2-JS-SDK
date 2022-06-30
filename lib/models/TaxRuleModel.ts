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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a tax rule that changes the behavior of Avalara's tax engine for certain products and/or entity use codes
in certain jurisdictions.
            
Avalara supports a few different types of tax rules.  For information about tax rule types, see
[TaxRuleTypeId](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/TaxRuleTypeId/)
            
Because different types of tax rules have different behavior, some fields may change their behavior based on
the type of tax rule selected.  Please read the documentation for each field carefully and ensure that
the value you send is appropriate for the type of tax rule.
 * @export
 * @interface TaxRuleModel
 */
 export interface TaxRuleModel {
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   companyId?: number;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   taxCodeId?: number;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   taxCode: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   stateFIPS: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   jurisName: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   jurisCode: string;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof TaxRuleModel
     */
   jurisTypeId?: Enums.JurisTypeId;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TaxRuleModel
     */
   jurisdictionTypeId?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   entityUseCode: string;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof TaxRuleModel
     */
   taxTypeId?: Enums.MatchingTaxType;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   taxTypeCode: string;
    /**
     * @type {Models.TaxRuleProductDetailModel[]}
     * @memberof TaxRuleModel
     */
   taxRuleProductDetail: Models.TaxRuleProductDetailModel[];
    /**
     * @type {Enums.RateType}
     * @memberof TaxRuleModel
     */
   rateTypeId?: Enums.RateType;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   rateTypeCode: string;
    /**
     * @type {Enums.TaxRuleTypeId}
     * @memberof TaxRuleModel
     */
   taxRuleTypeId: Enums.TaxRuleTypeId;
    /**
     * @type {boolean}
     * @memberof TaxRuleModel
     */
   isAllJuris?: boolean;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   value?: number;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   cap?: number;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   threshold?: number;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   options: string;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   countyFIPS: string;
    /**
     * @type {boolean}
     * @memberof TaxRuleModel
     */
   isSTPro?: boolean;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   region: string;
    /**
     * @type {Enums.Sourcing}
     * @memberof TaxRuleModel
     */
   sourcing?: Enums.Sourcing;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   taxTypeGroup: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   taxSubType: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   nonPassthroughExpression: string;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   currencyCode: string;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   preferredProgramId?: number;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   uomId?: number;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   modifiedUserId?: number;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   unitOfBasis: string;
 }