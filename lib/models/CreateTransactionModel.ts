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
 * Create a transaction
 * @export
 * @interface CreateTransactionModel
 */
 export interface CreateTransactionModel {
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   code: string;
    /**
     * @type {Models.LineItemModel[]}
     * @memberof CreateTransactionModel
     */
   lines: Models.LineItemModel[];
    /**
     * @type {Enums.DocumentType}
     * @memberof CreateTransactionModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   companyCode: string;
    /**
     * @type {Date}
     * @memberof CreateTransactionModel
     */
   date: Date;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   salespersonCode: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   customerCode: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   entityUseCode: string;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   discount?: number;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   purchaseOrderNo: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   exemptionNo: string;
    /**
     * @type {Models.AddressesModel}
     * @memberof CreateTransactionModel
     */
   addresses: Models.AddressesModel;
    /**
     * @type {Models.TransactionParameterModel[]}
     * @memberof CreateTransactionModel
     */
   parameters: Models.TransactionParameterModel[];
    /**
     * @type {Models.TransactionUserDefinedFieldModel[]}
     * @memberof CreateTransactionModel
     */
   userDefinedFields: Models.TransactionUserDefinedFieldModel[];
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   referenceCode: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   reportingLocationCode: string;
    /**
     * @type {boolean}
     * @memberof CreateTransactionModel
     */
   commit?: boolean;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   batchCode: string;
    /**
     * @type {Models.TaxOverrideModel}
     * @memberof CreateTransactionModel
     */
   taxOverride: Models.TaxOverrideModel;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   currencyCode: string;
    /**
     * @type {Enums.ServiceMode}
     * @memberof CreateTransactionModel
     */
   serviceMode?: Enums.ServiceMode;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   exchangeRate?: number;
    /**
     * @type {Date}
     * @memberof CreateTransactionModel
     */
   exchangeRateEffectiveDate?: Date;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   exchangeRateCurrencyCode: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   posLaneCode: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   businessIdentificationNo: string;
    /**
     * @type {boolean}
     * @memberof CreateTransactionModel
     */
   isSellerImporterOfRecord?: boolean;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   email: string;
    /**
     * @type {Enums.TaxDebugLevel}
     * @memberof CreateTransactionModel
     */
   debugLevel?: Enums.TaxDebugLevel;
    /**
     * @type {string}
     * @memberof CreateTransactionModel
     */
   customerSupplierName: string;
    /**
     * @type {number}
     * @memberof CreateTransactionModel
     */
   dataSourceId?: number;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof CreateTransactionModel
     */
   deliveryTerms?: Enums.DeliveryTerms;
 }