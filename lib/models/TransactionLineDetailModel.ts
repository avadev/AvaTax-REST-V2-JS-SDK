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
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * An individual tax detail element.  Represents the amount of tax calculated for a particular jurisdiction, for a particular line in an invoice.
 * @export
 * @class TransactionLineDetailModel
 */
 @JsonObject("TransactionLineDetailModel")
 export class TransactionLineDetailModel {
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("transactionLineId", Number, true)
   transactionLineId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("transactionId", Number, true)
   transactionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("addressId", Number, true)
   addressId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("countyFIPS", String, true)
   countyFIPS?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("stateFIPS", String, true)
   stateFIPS?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("exemptAmount", Number, true)
   exemptAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("exemptReasonId", Number, true)
   exemptReasonId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("exemptRuleId", Number, true)
   exemptRuleId?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("inState", Boolean, true)
   inState?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("jurisName", String, true)
   jurisName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("signatureCode", String, true)
   signatureCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("stateAssignedNo", String, true)
   stateAssignedNo?: string | undefined = undefined;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("jurisType", Enums.JurisTypeIdConverter, true)
   jurisType?: Enums.JurisTypeId | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("jurisdictionType", Enums.JurisdictionTypeConverter, true)
   jurisdictionType?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("nonTaxableAmount", Number, true)
   nonTaxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("nonTaxableRuleId", Number, true)
   nonTaxableRuleId?: number | undefined = undefined;
    /**
     * @type {Enums.TaxRuleTypeId}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("nonTaxableType", Enums.TaxRuleTypeIdConverter, true)
   nonTaxableType?: Enums.TaxRuleTypeId | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("rate", Number, true)
   rate?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("rateRuleId", Number, true)
   rateRuleId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("rateSourceId", Number, true)
   rateSourceId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("serCode", String, true)
   serCode?: string | undefined = undefined;
    /**
     * @type {Enums.Sourcing}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("sourcing", Enums.SourcingConverter, true)
   sourcing?: Enums.Sourcing | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("tax", Number, true)
   tax?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxType", String, true)
   taxType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxSubTypeId", String, true)
   taxSubTypeId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxTypeGroupId", String, true)
   taxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxName", String, true)
   taxName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxAuthorityTypeId", Number, true)
   taxAuthorityTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxCalculated", Number, true)
   taxCalculated?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxOverride", Number, true)
   taxOverride?: number | undefined = undefined;
    /**
     * @type {Enums.RateType}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("rateType", Enums.RateTypeConverter, true)
   rateType?: Enums.RateType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("rateTypeCode", String, true)
   rateTypeCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("taxableUnits", Number, true)
   taxableUnits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("nonTaxableUnits", Number, true)
   nonTaxableUnits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("exemptUnits", Number, true)
   exemptUnits?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("isNonPassThru", Boolean, true)
   isNonPassThru?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("isFee", Boolean, true)
   isFee?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("reportingTaxableUnits", Number, true)
   reportingTaxableUnits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("reportingNonTaxableUnits", Number, true)
   reportingNonTaxableUnits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("reportingExemptUnits", Number, true)
   reportingExemptUnits?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("reportingTax", Number, true)
   reportingTax?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("reportingTaxCalculated", Number, true)
   reportingTaxCalculated?: number | undefined = undefined;
    /**
     * @type {Enums.LiabilityType}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("liabilityType", Enums.LiabilityTypeConverter, true)
   liabilityType?: Enums.LiabilityType | undefined = undefined;
    /**
     * @type {Enums.ChargedTo}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("chargedTo", Enums.ChargedToConverter, true)
   chargedTo?: Enums.ChargedTo | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("avtUserBIN", String, true)
   avtUserBIN?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("recoverabilityPercentage", Number, true)
   recoverabilityPercentage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("recoverableAmount", Number, true)
   recoverableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   @JsonProperty("nonRecoverableAmount", Number, true)
   nonRecoverableAmount?: number | undefined = undefined;
 }