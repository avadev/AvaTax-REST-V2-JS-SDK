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
 * @version    22.6.1
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * One line item on this transaction.
 * @export
 * @interface TransactionLineModel
 */
 export interface TransactionLineModel {
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   transactionId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   lineNumber: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   boundaryOverrideId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   customerUsageType: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   entityUseCode: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   description: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   destinationAddressId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   originAddressId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   discountAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   discountTypeId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   exemptAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   exemptCertId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   certificateId: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   exemptNo: string;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   isItemTaxable?: boolean;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   isSSTP?: boolean;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   itemCode: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   lineAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   quantity?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   ref1: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   ref2: string;
    /**
     * @type {Date}
     * @memberof TransactionLineModel
     */
   reportingDate?: Date;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   revAccount: string;
    /**
     * @type {Enums.Sourcing}
     * @memberof TransactionLineModel
     */
   sourcing?: Enums.Sourcing;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   tax?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   taxableAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   taxCalculated?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   taxCode: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   taxCodeId?: number;
    /**
     * @type {Date}
     * @memberof TransactionLineModel
     */
   taxDate?: Date;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   taxEngine: string;
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TransactionLineModel
     */
   taxOverrideType?: Enums.TaxOverrideType;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   businessIdentificationNo: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   taxOverrideAmount?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   taxOverrideReason: string;
    /**
     * @type {boolean}
     * @memberof TransactionLineModel
     */
   taxIncluded?: boolean;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   merchantSellerId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   merchantSellerIdentifier: string;
    /**
     * @type {Enums.MarketplaceLiabilityType}
     * @memberof TransactionLineModel
     */
   marketplaceLiabilityType?: Enums.MarketplaceLiabilityType;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   originationDocumentId: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   originationSite: string;
    /**
     * @type {Models.TransactionLineDetailModel[]}
     * @memberof TransactionLineModel
     */
   details: Models.TransactionLineDetailModel[];
    /**
     * @type {Models.TransactionLineDetailModel[]}
     * @memberof TransactionLineModel
     */
   nonPassthroughDetails: Models.TransactionLineDetailModel[];
    /**
     * @type {Models.TransactionLineLocationTypeModel[]}
     * @memberof TransactionLineModel
     */
   lineLocationTypes: Models.TransactionLineLocationTypeModel[];
    /**
     * @type {Models.TransactionLineParameterModel[]}
     * @memberof TransactionLineModel
     */
   parameters: Models.TransactionLineParameterModel[];
    /**
     * @type {Models.TransactionLineUserDefinedFieldModel[]}
     * @memberof TransactionLineModel
     */
   userDefinedFields: Models.TransactionLineUserDefinedFieldModel[];
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   hsCode: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   costInsuranceFreight?: number;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   vatCode: string;
    /**
     * @type {number}
     * @memberof TransactionLineModel
     */
   vatNumberTypeId?: number;
    /**
     * @type {Models.TransactionLineTaxAmountByTaxTypeModel[]}
     * @memberof TransactionLineModel
     */
   taxAmountByTaxTypes: Models.TransactionLineTaxAmountByTaxTypeModel[];
    /**
     * @type {Enums.DeemedSellerType}
     * @memberof TransactionLineModel
     */
   deemedSupplier?: Enums.DeemedSellerType;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   category: string;
    /**
     * @type {string}
     * @memberof TransactionLineModel
     */
   summary: string;
 }