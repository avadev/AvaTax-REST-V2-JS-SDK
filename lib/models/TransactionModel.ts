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
import { TransactionLineModel } from "./TransactionLineModel";
import { TransactionAddressModel } from "./TransactionAddressModel";
import { TransactionLocationTypeModel } from "./TransactionLocationTypeModel";
import { TransactionSummary } from "./TransactionSummary";
import { TaxDetailsByTaxType } from "./TaxDetailsByTaxType";
import { TransactionParameterModel } from "./TransactionParameterModel";
import { TransactionUserDefinedFieldModel } from "./TransactionUserDefinedFieldModel";
import { AvaTaxMessage } from "./AvaTaxMessage";
import { InvoiceMessageModel } from "./InvoiceMessageModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * This object represents a single transaction; for example, a sales invoice or purchase order.
 * @export
 * @class TransactionModel
 */
 @JsonObject("TransactionModel")
 export class TransactionModel {
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   @JsonProperty("date", DateConverter, true)
   date?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   @JsonProperty("paymentDate", DateConverter, true)
   paymentDate?: Date | undefined = undefined;
    /**
     * @type {Enums.DocumentStatus}
     * @memberof TransactionModel
     */
   @JsonProperty("status", Enums.DocumentStatusConverter, true)
   status?: Enums.DocumentStatus | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof TransactionModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter, true)
   type?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("batchCode", String, true)
   batchCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("exchangeRateCurrencyCode", String, true)
   exchangeRateCurrencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("customerVendorCode", String, true)
   customerVendorCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("customerCode", String, true)
   customerCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("exemptNo", String, true)
   exemptNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   @JsonProperty("reconciled", Boolean, true)
   reconciled?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("locationCode", String, true)
   locationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("reportingLocationCode", String, true)
   reportingLocationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("purchaseOrderNo", String, true)
   purchaseOrderNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("referenceCode", String, true)
   referenceCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("salespersonCode", String, true)
   salespersonCode?: string | undefined = undefined;
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TransactionModel
     */
   @JsonProperty("taxOverrideType", Enums.TaxOverrideTypeConverter, true)
   taxOverrideType?: Enums.TaxOverrideType | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("taxOverrideAmount", Number, true)
   taxOverrideAmount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("taxOverrideReason", String, true)
   taxOverrideReason?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalAmount", Number, true)
   totalAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalExempt", Number, true)
   totalExempt?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalDiscount", Number, true)
   totalDiscount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalTax", Number, true)
   totalTax?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalTaxable", Number, true)
   totalTaxable?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("totalTaxCalculated", Number, true)
   totalTaxCalculated?: number | undefined = undefined;
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof TransactionModel
     */
   @JsonProperty("adjustmentReason", Enums.AdjustmentReasonConverter, true)
   adjustmentReason?: Enums.AdjustmentReason | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("adjustmentDescription", String, true)
   adjustmentDescription?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   @JsonProperty("locked", Boolean, true)
   locked?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("softwareVersion", String, true)
   softwareVersion?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("originAddressId", Number, true)
   originAddressId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("destinationAddressId", Number, true)
   destinationAddressId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   @JsonProperty("exchangeRateEffectiveDate", DateConverter, true)
   exchangeRateEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("exchangeRate", Number, true)
   exchangeRate?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   @JsonProperty("isSellerImporterOfRecord", Boolean, true)
   isSellerImporterOfRecord?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("email", String, true)
   email?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   @JsonProperty("taxDate", DateConverter, true)
   taxDate?: Date | undefined = undefined;
    /**
     * @type {TransactionLineModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("lines", [TransactionLineModel], true)
   lines?: TransactionLineModel[] | undefined = undefined;
    /**
     * @type {TransactionAddressModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("addresses", [TransactionAddressModel], true)
   addresses?: TransactionAddressModel[] | undefined = undefined;
    /**
     * @type {TransactionLocationTypeModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("locationTypes", [TransactionLocationTypeModel], true)
   locationTypes?: TransactionLocationTypeModel[] | undefined = undefined;
    /**
     * @type {TransactionSummary[]}
     * @memberof TransactionModel
     */
   @JsonProperty("summary", [TransactionSummary], true)
   summary?: TransactionSummary[] | undefined = undefined;
    /**
     * @type {TaxDetailsByTaxType[]}
     * @memberof TransactionModel
     */
   @JsonProperty("taxDetailsByTaxType", [TaxDetailsByTaxType], true)
   taxDetailsByTaxType?: TaxDetailsByTaxType[] | undefined = undefined;
    /**
     * @type {TransactionParameterModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("parameters", [TransactionParameterModel], true)
   parameters?: TransactionParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionUserDefinedFieldModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("userDefinedFields", [TransactionUserDefinedFieldModel], true)
   userDefinedFields?: TransactionUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {AvaTaxMessage[]}
     * @memberof TransactionModel
     */
   @JsonProperty("messages", [AvaTaxMessage], true)
   messages?: AvaTaxMessage[] | undefined = undefined;
    /**
     * @type {InvoiceMessageModel[]}
     * @memberof TransactionModel
     */
   @JsonProperty("invoiceMessages", [InvoiceMessageModel], true)
   invoiceMessages?: InvoiceMessageModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   @JsonProperty("customerSupplierName", String, true)
   customerSupplierName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   @JsonProperty("dataSourceId", Number, true)
   dataSourceId?: number | undefined = undefined;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof TransactionModel
     */
   @JsonProperty("deliveryTerms", Enums.DeliveryTermsConverter, true)
   deliveryTerms?: Enums.DeliveryTerms | undefined = undefined;
 }