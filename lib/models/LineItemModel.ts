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
 * @version    22.9.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents one line item in a transaction
 * @export
 * @interface LineItemModel
 */
 export interface LineItemModel {
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   number: string;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   quantity?: number;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   amount: number;
    /**
     * @type {Models.AddressesModel}
     * @memberof LineItemModel
     */
   addresses: Models.AddressesModel;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   taxCode: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   entityUseCode: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   itemCode: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   exemptionCode: string;
    /**
     * @type {boolean}
     * @memberof LineItemModel
     */
   discounted?: boolean;
    /**
     * @type {boolean}
     * @memberof LineItemModel
     */
   taxIncluded?: boolean;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   revenueAccount: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   ref1: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   ref2: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   businessIdentificationNo: string;
    /**
     * @type {Models.TaxOverrideModel}
     * @memberof LineItemModel
     */
   taxOverride: Models.TaxOverrideModel;
    /**
     * @type {Models.TransactionLineParameterModel[]}
     * @memberof LineItemModel
     */
   parameters: Models.TransactionLineParameterModel[];
    /**
     * @type {Models.TransactionLineUserDefinedFieldModel[]}
     * @memberof LineItemModel
     */
   userDefinedFields: Models.TransactionLineUserDefinedFieldModel[];
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   hsCode: string;
    /**
     * @type {number}
     * @memberof LineItemModel
     */
   merchantSellerId?: number;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   merchantSellerIdentifier: string;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof LineItemModel
     */
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   originationDocumentId: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   originationSite: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   category: string;
    /**
     * @type {string}
     * @memberof LineItemModel
     */
   summary: string;
 }