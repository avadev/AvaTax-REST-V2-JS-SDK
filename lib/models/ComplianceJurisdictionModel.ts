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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Model for distinct jurisdictions.
 * @export
 * @interface ComplianceJurisdictionModel
 */
 export interface ComplianceJurisdictionModel {
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionModel
     */
   taxRegionId?: number;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   stateAssignedCode?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   jurisdictionTypeId?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   county?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof ComplianceJurisdictionModel
     */
   taxRegionName?: string;
    /**
     * @type {number}
     * @memberof ComplianceJurisdictionModel
     */
   taxAuthorityId?: number;
    /**
     * @type {Models.ComplianceAggregatedTaxRateModel[]}
     * @memberof ComplianceJurisdictionModel
     */
   rates: Models.ComplianceAggregatedTaxRateModel[];
 }