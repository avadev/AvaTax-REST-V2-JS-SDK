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
 * The tax rate model.
 * @export
 * @interface ComplianceTaxRateModel
 */
 export interface ComplianceTaxRateModel {
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   rate?: number;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   jurisdictionId?: number;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   taxRegionId?: number;
    /**
     * @type {Date}
     * @memberof ComplianceTaxRateModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof ComplianceTaxRateModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   rateTypeId: string;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   taxTypeId: string;
    /**
     * @type {string}
     * @memberof ComplianceTaxRateModel
     */
   taxName: string;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   unitOfBasisId?: number;
    /**
     * @type {number}
     * @memberof ComplianceTaxRateModel
     */
   rateTypeTaxTypeMappingId?: number;
 }