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
 * Represents a Jurisdiction with applicable TaxType, TaxSubType and RateType.
 * @export
 * @interface JurisdictionRateTypeTaxTypeMappingModel
 */
 export interface JurisdictionRateTypeTaxTypeMappingModel {
    /**
     * @type {number}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   state: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   jurisdictionType: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   jurisdictionCode: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   longName: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   taxTypeId: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   taxSubTypeId: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   taxTypeGroupId: string;
    /**
     * @type {string}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   rateTypeId: string;
    /**
     * @type {Date}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof JurisdictionRateTypeTaxTypeMappingModel
     */
   endDate?: Date;
 }