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
 * A flattened model for jurisdictions and rates.
 * @export
 * @interface ComplianceJurisdictionRateModel
 */
 export interface ComplianceJurisdictionRateModel {
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   jurisdictionId?: number;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   jurisdictionTypeId: string;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   rate?: number;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   rateTypeId: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   taxTypeId: string;
    /**
     * @type {Date}
     * @memberof ComplianceJurisdictionRateModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof ComplianceJurisdictionRateModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionRateModel
     */
   stateAssignedCode: string;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionRateModel
     */
   taxAuthorityId?: number;
 }