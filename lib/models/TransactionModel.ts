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
 * This object represents a single transaction; for example, a sales invoice or purchase order.
 * @export
 * @interface TransactionModel
 */
 export interface TransactionModel {
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   code: string;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   companyId?: number;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   date?: Date;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   paymentDate?: Date;
    /**
     * @type {Enums.DocumentStatus}
     * @memberof TransactionModel
     */
   status?: Enums.DocumentStatus;
    /**
     * @type {Enums.DocumentType}
     * @memberof TransactionModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   batchCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   currencyCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   exchangeRateCurrencyCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   entityUseCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   customerVendorCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   customerCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   exemptNo: string;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   reconciled?: boolean;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   locationCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   reportingLocationCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   purchaseOrderNo: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   referenceCode: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   salespersonCode: string;
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TransactionModel
     */
   taxOverrideType?: Enums.TaxOverrideType;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   taxOverrideAmount?: number;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   taxOverrideReason: string;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalExempt?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalDiscount?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalTax?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalTaxable?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   totalTaxCalculated?: number;
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof TransactionModel
     */
   adjustmentReason?: Enums.AdjustmentReason;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   adjustmentDescription: string;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   locked?: boolean;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   country: string;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   version?: number;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   softwareVersion: string;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   originAddressId?: number;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   destinationAddressId?: number;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   exchangeRateEffectiveDate?: Date;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   exchangeRate?: number;
    /**
     * @type {boolean}
     * @memberof TransactionModel
     */
   isSellerImporterOfRecord?: boolean;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   businessIdentificationNo: string;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   modifiedUserId?: number;
    /**
     * @type {Date}
     * @memberof TransactionModel
     */
   taxDate?: Date;
    /**
     * @type {Models.TransactionLineModel[]}
     * @memberof TransactionModel
     */
   lines: Models.TransactionLineModel[];
    /**
     * @type {Models.TransactionAddressModel[]}
     * @memberof TransactionModel
     */
   addresses: Models.TransactionAddressModel[];
    /**
     * @type {Models.TransactionLocationTypeModel[]}
     * @memberof TransactionModel
     */
   locationTypes: Models.TransactionLocationTypeModel[];
    /**
     * @type {Models.TransactionSummary[]}
     * @memberof TransactionModel
     */
   summary: Models.TransactionSummary[];
    /**
     * @type {Models.TaxDetailsByTaxType[]}
     * @memberof TransactionModel
     */
   taxDetailsByTaxType: Models.TaxDetailsByTaxType[];
    /**
     * @type {Models.TransactionParameterModel[]}
     * @memberof TransactionModel
     */
   parameters: Models.TransactionParameterModel[];
    /**
     * @type {Models.TransactionUserDefinedFieldModel[]}
     * @memberof TransactionModel
     */
   userDefinedFields: Models.TransactionUserDefinedFieldModel[];
    /**
     * @type {Models.AvaTaxMessage[]}
     * @memberof TransactionModel
     */
   messages: Models.AvaTaxMessage[];
    /**
     * @type {Models.InvoiceMessageModel[]}
     * @memberof TransactionModel
     */
   invoiceMessages: Models.InvoiceMessageModel[];
    /**
     * @type {string}
     * @memberof TransactionModel
     */
   customerSupplierName: string;
    /**
     * @type {number}
     * @memberof TransactionModel
     */
   dataSourceId?: number;
    /**
     * @type {Enums.DeliveryTerms}
     * @memberof TransactionModel
     */
   deliveryTerms?: Enums.DeliveryTerms;
 }