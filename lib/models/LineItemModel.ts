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
 * Represents one line item in a transaction
 * @export
 * @class LineItemModel
 */
 @JsonObject("LineItemModel")
 export class LineItemModel {
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("number", String, true)
   number?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   @JsonProperty("quantity", Number, true)
   quantity?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   @JsonProperty("amount", Number)
   amount: number = undefined;
    /**
     * @type {AddressesModel}
     * @memberof LineItemModel
     */
   @JsonProperty("addresses", AddressesModel, true)
   addresses?: AddressesModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("taxCode", String, true)
   taxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("customerUsageType", String, true)
   customerUsageType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("exemptionCode", String, true)
   exemptionCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LineItemModel
     */
   @JsonProperty("discounted", Boolean, true)
   discounted?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LineItemModel
     */
   @JsonProperty("taxIncluded", Boolean, true)
   taxIncluded?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("revenueAccount", String, true)
   revenueAccount?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("ref1", String, true)
   ref1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("ref2", String, true)
   ref2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {TaxOverrideModel}
     * @memberof LineItemModel
     */
   @JsonProperty("taxOverride", TaxOverrideModel, true)
   taxOverride?: TaxOverrideModel | undefined = undefined;
    /**
     * @type {TransactionLineParameterModel[]}
     * @memberof LineItemModel
     */
   @JsonProperty("parameters", [TransactionLineParameterModel], true)
   parameters?: TransactionLineParameterModel[] | undefined = undefined;
    /**
     * @type {TransactionLineUserDefinedFieldModel[]}
     * @memberof LineItemModel
     */
   @JsonProperty("userDefinedFields", [TransactionLineUserDefinedFieldModel], true)
   userDefinedFields?: TransactionLineUserDefinedFieldModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   @JsonProperty("merchantSellerId", Number, true)
   merchantSellerId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("merchantSellerIdentifier", String, true)
   merchantSellerIdentifier?: string | undefined = undefined;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof LineItemModel
     */
   @JsonProperty("marketplaceLiabilityType", Enums.MarketplaceLiabilityTypeConverter, true)
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("originationDocumentId", String, true)
   originationDocumentId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("originationSite", String, true)
   originationSite?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
 }