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
import { TransactionLineDetailModel } from "./TransactionLineDetailModel";
import { TransactionLineLocationTypeModel } from "./TransactionLineLocationTypeModel";
import { TransactionLineParameterModel } from "./TransactionLineParameterModel";
import { TransactionLineUserDefinedFieldModel } from "./TransactionLineUserDefinedFieldModel";
import { TransactionLineTaxAmountByTaxTypeModel } from "./TransactionLineTaxAmountByTaxTypeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * One line item on this transaction.
 * @export
 * @class TransactionLineModel
 */
 @JsonObject("TransactionLineModel")
 export class TransactionLineModel {
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("transactionId", Number, true)
   transactionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("lineNumber", String, true)
   lineNumber?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("boundaryOverrideId", Number, true)
   boundaryOverrideId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("destinationAddressId", Number, true)
   destinationAddressId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("originAddressId", Number, true)
   originAddressId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("discountAmount", Number, true)
   discountAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("discountTypeId", Number, true)
   discountTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("exemptAmount", Number, true)
   exemptAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("exemptCertId", Number, true)
   exemptCertId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("certificateId", String, true)
   certificateId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("exemptNo", String, true)
   exemptNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   @JsonProperty("isItemTaxable", Boolean, true)
   isItemTaxable?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   @JsonProperty("isSSTP", Boolean, true)
   isSSTP?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("lineAmount", Number, true)
   lineAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("quantity", Number, true)
   quantity?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("ref1", String, true)
   ref1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("ref2", String, true)
   ref2?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionLineModel
     */
   @JsonProperty("reportingDate", DateConverter, true)
   reportingDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("revAccount", String, true)
   revAccount?: string | undefined = undefined;
    /**
     * @type {Enums.Sourcing}
     * @memberof TransactionLineModel
     */
   @JsonProperty("sourcing", Enums.SourcingConverter, true)
   sourcing?: Enums.Sourcing | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("tax", Number, true)
   tax?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxableAmount", Number, true)
   taxableAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxCalculated", Number, true)
   taxCalculated?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxCodeId", Number, true)
   taxCodeId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxDate", DateConverter, true)
   taxDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxEngine", String, true)
   taxEngine?: string | undefined = undefined;
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxOverrideType", Enums.TaxOverrideTypeConverter, true)
   taxOverrideType?: Enums.TaxOverrideType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxOverrideAmount", Number, true)
   taxOverrideAmount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxOverrideReason", String, true)
   taxOverrideReason?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxIncluded", Boolean, true)
   taxIncluded?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("merchantSellerId", Number, true)
   merchantSellerId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("merchantSellerIdentifier", String, true)
   merchantSellerIdentifier?: string | undefined = undefined;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof TransactionLineModel
     */
   @JsonProperty("marketplaceLiabilityType", Enums.MarketplaceLiabilityTypeConverter, true)
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("originationDocumentId", String, true)
   originationDocumentId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("originationSite", String, true)
   originationSite?: string | undefined = undefined;
    /**
     * @type {TransactionLineDetailModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("details", [TransactionLineDetailModel], true)
   details?: TransactionLineDetailModel[] | undefined = undefined;
    /**
     * @type {TransactionLineDetailModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("accountPayableSalesTaxDetails", [TransactionLineDetailModel], true)
   accountPayableSalesTaxDetails?: TransactionLineDetailModel[] | undefined = undefined;
    /**
     * @type {TransactionLineDetailModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("nonPassthroughDetails", [TransactionLineDetailModel], true)
   nonPassthroughDetails?: TransactionLineDetailModel[] | undefined = undefined;
    /**
     * @type {TransactionLineLocationTypeModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("lineLocationTypes", [TransactionLineLocationTypeModel], true)
   lineLocationTypes?: TransactionLineLocationTypeModel[] | undefined = undefined;
    /**
     * @type {TransactionLineParameterModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("parameters", [TransactionLineParameterModel], true)
   parameters?: TransactionLineParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionLineUserDefinedFieldModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("userDefinedFields", [TransactionLineUserDefinedFieldModel], true)
   userDefinedFields?: TransactionLineUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("costInsuranceFreight", Number, true)
   costInsuranceFreight?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("vatCode", String, true)
   vatCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   @JsonProperty("vatNumberTypeId", Number, true)
   vatNumberTypeId?: number | undefined = undefined;
    /**
     * @type {TransactionLineTaxAmountByTaxTypeModel[]}
     * @memberof TransactionLineModel
     */
   @JsonProperty("taxAmountByTaxTypes", [TransactionLineTaxAmountByTaxTypeModel], true)
   taxAmountByTaxTypes?: TransactionLineTaxAmountByTaxTypeModel[] | undefined = undefined;
    /**
     * @type {Enums.DeemedSellerType}
     * @memberof TransactionLineModel
     */
   @JsonProperty("deemedSupplier", Enums.DeemedSellerTypeConverter, true)
   deemedSupplier?: Enums.DeemedSellerType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
 }