/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A MultiDocument transaction represents a sale or purchase that occurred between more than two companies.
            
A traditional transaction requires exactly two parties: a seller and a buyer.  MultiDocument transactions can
involve a marketplace of vendors, each of which contributes some portion of the final transaction.  Within
a MultiDocument transaction, each individual buyer and seller pair are matched up and converted to a separate
document.  This separation of documents allows each seller to file their taxes separately.
 * @export
 * @interface CreateMultiDocumentModel
 */
 export interface CreateMultiDocumentModel {
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   code: string;
    /**
     * @type {Models.MultiDocumentLineItemModel[]}
     * @memberof CreateMultiDocumentModel
     */
   lines: Models.MultiDocumentLineItemModel[];
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   allowAdjust?: boolean;
    /**
     * @type {Enums.DocumentType}
     * @memberof CreateMultiDocumentModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   companyCode: string;
    /**
     * @type {Date}
     * @memberof CreateMultiDocumentModel
     */
   date: Date;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   salespersonCode: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   customerCode: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   entityUseCode: string;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   discount?: number;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   purchaseOrderNo: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   exemptionNo: string;
    /**
     * @type {Models.AddressesModel}
     * @memberof CreateMultiDocumentModel
     */
   addresses: Models.AddressesModel;
    /**
     * @type {Models.TransactionParameterModel[]}
     * @memberof CreateMultiDocumentModel
     */
   parameters: Models.TransactionParameterModel[];
    /**
     * @type {Models.TransactionUserDefinedFieldModel[]}
     * @memberof CreateMultiDocumentModel
     */
   userDefinedFields: Models.TransactionUserDefinedFieldModel[];
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   referenceCode: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   reportingLocationCode: string;
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   commit?: boolean;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   batchCode: string;
    /**
     * @type {Models.TaxOverrideModel}
     * @memberof CreateMultiDocumentModel
     */
   taxOverride: Models.TaxOverrideModel;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   currencyCode: string;
    /**
     * @type {Enums.ServiceMode}
     * @memberof CreateMultiDocumentModel
     */
   serviceMode?: Enums.ServiceMode;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   exchangeRate?: number;
    /**
     * @type {Date}
     * @memberof CreateMultiDocumentModel
     */
   exchangeRateEffectiveDate?: Date;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   exchangeRateCurrencyCode: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   posLaneCode: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   businessIdentificationNo: string;
    /**
     * @type {boolean}
     * @memberof CreateMultiDocumentModel
     */
   isSellerImporterOfRecord?: boolean;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   email: string;
    /**
     * @type {Enums.TaxDebugLevel}
     * @memberof CreateMultiDocumentModel
     */
   debugLevel?: Enums.TaxDebugLevel;
    /**
     * @type {string}
     * @memberof CreateMultiDocumentModel
     */
   customerSupplierName: string;
    /**
     * @type {number}
     * @memberof CreateMultiDocumentModel
     */
   dataSourceId?: number;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof CreateMultiDocumentModel
     */
   deliveryTerms?: Enums.DeliveryTerms;
 }