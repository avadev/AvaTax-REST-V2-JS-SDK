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
import { AddressesModel } from "./AddressesModel";
import { TaxOverrideModel } from "./TaxOverrideModel";
import { TransactionLineParameterModel } from "./TransactionLineParameterModel";
import { TransactionLineUserDefinedFieldModel } from "./TransactionLineUserDefinedFieldModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents one line item in a MultiDocument transaction
 * @export
 * @class MultiDocumentLineItemModel
 */
 @JsonObject("MultiDocumentLineItemModel")
 export class MultiDocumentLineItemModel {
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("reportingLocationCode", String, true)
   reportingLocationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("number", String, true)
   number?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("quantity", Number, true)
   quantity?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("amount", Number)
   amount: number = undefined;
    /**
     * @type {AddressesModel}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("addresses", AddressesModel, true)
   addresses?: AddressesModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("exemptionCode", String, true)
   exemptionCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("discounted", Boolean, true)
   discounted?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("taxIncluded", Boolean, true)
   taxIncluded?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("revenueAccount", String, true)
   revenueAccount?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("ref1", String, true)
   ref1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("ref2", String, true)
   ref2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {TaxOverrideModel}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("taxOverride", TaxOverrideModel, true)
   taxOverride?: TaxOverrideModel | undefined = undefined;
    /**
     * @type {TransactionLineParameterModel[]}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("parameters", [TransactionLineParameterModel], true)
   parameters?: TransactionLineParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionLineUserDefinedFieldModel[]}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("userDefinedFields", [TransactionLineUserDefinedFieldModel], true)
   userDefinedFields?: TransactionLineUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("merchantSellerId", Number, true)
   merchantSellerId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("merchantSellerIdentifier", String, true)
   merchantSellerIdentifier?: string | undefined = undefined;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("marketplaceLiabilityType", Enums.MarketplaceLiabilityTypeConverter, true)
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("originationDocumentId", String, true)
   originationDocumentId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("originationSite", String, true)
   originationSite?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
 }