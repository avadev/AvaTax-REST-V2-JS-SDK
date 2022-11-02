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
 * Represents an override of tax jurisdictions for a specific address.
            
During the time period represented by EffDate through EndDate, all tax decisions for addresses matching
this override object will be assigned to the list of jurisdictions designated in this object.
 * @export
 * @interface JurisdictionOverrideModel
 */
 export interface JurisdictionOverrideModel {
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   accountId?: number;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   line1?: string;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof JurisdictionOverrideModel
     */
   postalCode: string;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   endDate?: Date;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof JurisdictionOverrideModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.JurisdictionModel[]}
     * @memberof JurisdictionOverrideModel
     */
   jurisdictions: Models.JurisdictionModel[];
    /**
     * @type {number}
     * @memberof JurisdictionOverrideModel
     */
   taxRegionId: number;
    /**
     * @type {Enums.BoundaryLevel}
     * @memberof JurisdictionOverrideModel
     */
   boundaryLevel?: Enums.BoundaryLevel;
    /**
     * @type {boolean}
     * @memberof JurisdictionOverrideModel
     */
   isDefault?: boolean;
 }