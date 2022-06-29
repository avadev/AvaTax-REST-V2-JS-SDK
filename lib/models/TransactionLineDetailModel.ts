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
 * An individual tax detail element.  Represents the amount of tax calculated for a particular jurisdiction, for a particular line in an invoice.
 * @export
 * @interface TransactionLineDetailModel
 */
 export interface TransactionLineDetailModel {
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   transactionLineId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   transactionId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   addressId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   countyFIPS: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   stateFIPS: string;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   exemptAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   exemptReasonId?: number;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   inState?: boolean;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   jurisCode: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   jurisName: string;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   jurisdictionId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   signatureCode: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   stateAssignedNo: string;
    /**
     * @type {Enums.JurisTypeId}
     * @memberof TransactionLineDetailModel
     */
   jurisType?: Enums.JurisTypeId;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TransactionLineDetailModel
     */
   jurisdictionType?: Enums.JurisdictionType;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   nonTaxableAmount?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   nonTaxableRuleId?: number;
    /**
     * @type {Enums.TaxRuleTypeId}
     * @memberof TransactionLineDetailModel
     */
   nonTaxableType?: Enums.TaxRuleTypeId;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   rate?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   rateRuleId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   rateSourceId?: number;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   serCode: string;
    /**
     * @type {Enums.Sourcing}
     * @memberof TransactionLineDetailModel
     */
   sourcing?: Enums.Sourcing;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   tax?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxableAmount?: number;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   taxType: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   taxSubTypeId: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   taxTypeGroupId: string;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   taxName: string;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxAuthorityTypeId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxRegionId?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxCalculated?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxOverride?: number;
    /**
     * @type {Enums.RateType}
     * @memberof TransactionLineDetailModel
     */
   rateType?: Enums.RateType;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   rateTypeCode: string;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   taxableUnits?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   nonTaxableUnits?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   exemptUnits?: number;
    /**
     * @type {string}
     * @memberof TransactionLineDetailModel
     */
   unitOfBasis: string;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   isNonPassThru?: boolean;
    /**
     * @type {boolean}
     * @memberof TransactionLineDetailModel
     */
   isFee?: boolean;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   reportingTaxableUnits?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   reportingNonTaxableUnits?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   reportingExemptUnits?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   reportingTax?: number;
    /**
     * @type {number}
     * @memberof TransactionLineDetailModel
     */
   reportingTaxCalculated?: number;
    /**
     * @type {Enums.LiabilityType}
     * @memberof TransactionLineDetailModel
     */
   liabilityType?: Enums.LiabilityType;
 }