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
import { MultiDocumentLineItemModel } from "./MultiDocumentLineItemModel";
import { AddressesModel } from "./AddressesModel";
import { TransactionParameterModel } from "./TransactionParameterModel";
import { TransactionUserDefinedFieldModel } from "./TransactionUserDefinedFieldModel";
import { TaxOverrideModel } from "./TaxOverrideModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A MultiDocument transaction represents a sale or purchase that occurred between more than two companies.
            
A traditional transaction requires exactly two parties: a seller and a buyer.  MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction.  Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document.  This separation of documents allows each seller to file their taxes separately.
 * @export
 * @class CreateMultiDocumentModel
 */
 @JsonObject("CreateMultiDocumentModel")
 export class CreateMultiDocumentModel {
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {MultiDocumentLineItemModel[]}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("lines", [MultiDocumentLineItemModel])
   lines: MultiDocumentLineItemModel[] = undefined;
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("allowAdjust", Boolean, true)
   allowAdjust?: boolean | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter, true)
   type?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("date", DateConverter)
   date: Date = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("salespersonCode", String, true)
   salespersonCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("customerCode", String)
   customerCode: string = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("discount", Number, true)
   discount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("purchaseOrderNo", String, true)
   purchaseOrderNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("exemptionNo", String, true)
   exemptionNo?: string | undefined = undefined;
    /**
     * @type {AddressesModel}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("addresses", AddressesModel, true)
   addresses?: AddressesModel | undefined = undefined;
    /**
     * @type {TransactionParameterModel[]}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("parameters", [TransactionParameterModel], true)
   parameters?: TransactionParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionUserDefinedFieldModel[]}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("userDefinedFields", [TransactionUserDefinedFieldModel], true)
   userDefinedFields?: TransactionUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("referenceCode", String, true)
   referenceCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("reportingLocationCode", String, true)
   reportingLocationCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("commit", Boolean, true)
   commit?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("batchCode", String, true)
   batchCode?: string | undefined = undefined;
    /**
     * @type {TaxOverrideModel}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("taxOverride", TaxOverrideModel, true)
   taxOverride?: TaxOverrideModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {Enums.ServiceMode}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("serviceMode", Enums.ServiceModeConverter, true)
   serviceMode?: Enums.ServiceMode | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("exchangeRate", Number, true)
   exchangeRate?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("exchangeRateEffectiveDate", DateConverter, true)
   exchangeRateEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("exchangeRateCurrencyCode", String, true)
   exchangeRateCurrencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("posLaneCode", String, true)
   posLaneCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("isSellerImporterOfRecord", Boolean, true)
   isSellerImporterOfRecord?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("email", String, true)
   email?: string | undefined = undefined;
    /**
     * @type {Enums.TaxDebugLevel}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("debugLevel", Enums.TaxDebugLevelConverter, true)
   debugLevel?: Enums.TaxDebugLevel | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("customerSupplierName", String, true)
   customerSupplierName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("dataSourceId", Number, true)
   dataSourceId?: number | undefined = undefined;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof CreateMultiDocumentModel
     */
   @JsonProperty("deliveryTerms", Enums.DeliveryTermsConverter, true)
   deliveryTerms?: Enums.DeliveryTerms | undefined = undefined;
 }