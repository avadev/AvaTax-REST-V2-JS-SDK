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
 * The tax region jurisdiction model.
 * @export
 * @interface TaxRegionJurisdictionModel
 */
 export interface TaxRegionJurisdictionModel {
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   jurisdictionId?: number;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   taxRegionId?: number;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   jurisdictionLevelId?: number;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   rockName: string;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   reportLevel?: number;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   stateAssignedCode: string;
    /**
     * @type {number}
     * @memberof TaxRegionJurisdictionModel
     */
   taxAuthorityId?: number;
    /**
     * @type {string}
     * @memberof TaxRegionJurisdictionModel
     */
   signatureCode: string;
    /**
     * @type {Date}
     * @memberof TaxRegionJurisdictionModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof TaxRegionJurisdictionModel
     */
   endDate?: Date;
 }