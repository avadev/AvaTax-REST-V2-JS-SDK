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
import { LineItemModel } from "./LineItemModel";
import { AddressesModel } from "./AddressesModel";
import { TransactionParameterModel } from "./TransactionParameterModel";
import { TransactionUserDefinedFieldModel } from "./TransactionUserDefinedFieldModel";
import { TaxOverrideModel } from "./TaxOverrideModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Create a transaction
 * @export
 * @class CreateTransactionModel
 */
 @JsonObject("CreateTransactionModel")
 export class CreateTransactionModel {
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {LineItemModel[]}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("lines", [LineItemModel])
   lines: LineItemModel[] = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter, true)
   type?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("date", DateConverter)
   date: Date = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("salespersonCode", String, true)
   salespersonCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("customerCode", String)
   customerCode: string = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("discount", Number, true)
   discount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("purchaseOrderNo", String, true)
   purchaseOrderNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("exemptionNo", String, true)
   exemptionNo?: string | undefined = undefined;
    /**
     * @type {AddressesModel}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("addresses", AddressesModel, true)
   addresses?: AddressesModel | undefined = undefined;
    /**
     * @type {TransactionParameterModel[]}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("parameters", [TransactionParameterModel], true)
   parameters?: TransactionParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionUserDefinedFieldModel[]}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("userDefinedFields", [TransactionUserDefinedFieldModel], true)
   userDefinedFields?: TransactionUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("referenceCode", String, true)
   referenceCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("reportingLocationCode", String, true)
   reportingLocationCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("commit", Boolean, true)
   commit?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("batchCode", String, true)
   batchCode?: string | undefined = undefined;
    /**
     * @type {TaxOverrideModel}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("taxOverride", TaxOverrideModel, true)
   taxOverride?: TaxOverrideModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {Enums.ServiceMode}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("serviceMode", Enums.ServiceModeConverter, true)
   serviceMode?: Enums.ServiceMode | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("exchangeRate", Number, true)
   exchangeRate?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("exchangeRateEffectiveDate", DateConverter, true)
   exchangeRateEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("exchangeRateCurrencyCode", String, true)
   exchangeRateCurrencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("posLaneCode", String, true)
   posLaneCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("isSellerImporterOfRecord", Boolean, true)
   isSellerImporterOfRecord?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("email", String, true)
   email?: string | undefined = undefined;
    /**
     * @type {Enums.TaxDebugLevel}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("debugLevel", Enums.TaxDebugLevelConverter, true)
   debugLevel?: Enums.TaxDebugLevel | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("customerSupplierName", String, true)
   customerSupplierName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("dataSourceId", Number, true)
   dataSourceId?: number | undefined = undefined;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof CreateTransactionModel
     */
   @JsonProperty("deliveryTerms", Enums.DeliveryTermsConverter, true)
   deliveryTerms?: Enums.DeliveryTerms | undefined = undefined;
 }