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
 * Represents one line item in a MultiDocument transaction
 * @export
 * @interface MultiDocumentLineItemModel
 */
 export interface MultiDocumentLineItemModel {
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   companyCode?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   reportingLocationCode?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   number?: string;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   quantity?: number;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   amount: number;
    /**
     * @type {Models.AddressesModel}
     * @memberof MultiDocumentLineItemModel
     */
   addresses: Models.AddressesModel;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   taxCode?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   customerUsageType?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   entityUseCode?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   itemCode?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   exemptionCode?: string;
    /**
     * @type {boolean}
     * @memberof MultiDocumentLineItemModel
     */
   discounted?: boolean;
    /**
     * @type {boolean}
     * @memberof MultiDocumentLineItemModel
     */
   taxIncluded?: boolean;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   revenueAccount?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   ref1?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   ref2?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   description?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   businessIdentificationNo?: string;
    /**
     * @type {Models.TaxOverrideModel}
     * @memberof MultiDocumentLineItemModel
     */
   taxOverride: Models.TaxOverrideModel;
    /**
     * @type {Models.TransactionLineParameterModel[]}
     * @memberof MultiDocumentLineItemModel
     */
   parameters: Models.TransactionLineParameterModel[];
    /**
     * @type {Models.TransactionLineUserDefinedFieldModel[]}
     * @memberof MultiDocumentLineItemModel
     */
   userDefinedFields: Models.TransactionLineUserDefinedFieldModel[];
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   hsCode?: string;
    /**
     * @type {number}
     * @memberof MultiDocumentLineItemModel
     */
   merchantSellerId?: number;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   merchantSellerIdentifier?: string;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof MultiDocumentLineItemModel
     */
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   originationDocumentId?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   originationSite?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   category?: string;
    /**
     * @type {string}
     * @memberof MultiDocumentLineItemModel
     */
   summary?: string;
 }