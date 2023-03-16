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
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { TaxRuleProductDetailModel } from "./TaxRuleProductDetailModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a tax rule that changes the behavior of Avalara's tax engine for certain products and/or entity use codes
in certain jurisdictions.
            
Avalara supports a few different types of tax rules.  For information about tax rule types, see
[TaxRuleTypeId](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/TaxRuleTypeId/)
            
Because different types of tax rules have different behavior, some fields may change their behavior based on
the type of tax rule selected.  Please read the documentation for each field carefully and ensure that
the value you send is appropriate for the type of tax rule.
 * @export
 * @class TaxRuleModel
 */
 @JsonObject("TaxRuleModel")
 export class TaxRuleModel {
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxCodeId", Number, true)
   taxCodeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("stateFIPS", String, true)
   stateFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("jurisCode", String)
   jurisCode: string = undefined;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof TaxRuleModel
     */
   @JsonProperty("jurisTypeId", Enums.JurisTypeIdConverter, true)
   jurisTypeId?: Enums.JurisTypeId | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TaxRuleModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxTypeId", Enums.MatchingTaxTypeConverter, true)
   taxTypeId?: Enums.MatchingTaxType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxTypeCode", String, true)
   taxTypeCode?: string | undefined = undefined;
    /**
     * @type {TaxRuleProductDetailModel[]}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxRuleProductDetail", [TaxRuleProductDetailModel], true)
   taxRuleProductDetail?: TaxRuleProductDetailModel[] | undefined = undefined;
    /**
     * @type {Enums.RateType}
     * @memberof TaxRuleModel
     */
   @JsonProperty("rateTypeId", Enums.RateTypeConverter, true)
   rateTypeId?: Enums.RateType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {Enums.TaxRuleTypeId}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxRuleTypeId", Enums.TaxRuleTypeIdConverter)
   taxRuleTypeId: Enums.TaxRuleTypeId = undefined;
    /**
     * @type {boolean}
     * @memberof TaxRuleModel
     */
   @JsonProperty("isAllJuris", Boolean, true)
   isAllJuris?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("value", Number, true)
   value?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("cap", Number, true)
   cap?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("threshold", Number, true)
   threshold?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("options", String, true)
   options?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("countyFIPS", String, true)
   countyFIPS?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxRuleModel
     */
   @JsonProperty("isSTPro", Boolean, true)
   isSTPro?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {Enums.Sourcing}
     * @memberof TaxRuleModel
     */
   @JsonProperty("sourcing", Enums.SourcingConverter, true)
   sourcing?: Enums.Sourcing | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("nonPassthroughExpression", String, true)
   nonPassthroughExpression?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("preferredProgramId", Number, true)
   preferredProgramId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("uomId", Number, true)
   uomId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRuleModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxRuleModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRuleModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
 }