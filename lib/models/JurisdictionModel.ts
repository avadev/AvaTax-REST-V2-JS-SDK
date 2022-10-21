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
 * Represents information about a single legal taxing jurisdiction
 * @export
 * @interface JurisdictionModel
 */
 export interface JurisdictionModel {
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   name: string;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof JurisdictionModel
     */
   type: Enums.JurisdictionType;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   rate?: number;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   salesRate?: number;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   signatureCode: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   region: string;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   useRate?: number;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   city: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   county: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   shortName: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   stateFips: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   countyFips: string;
    /**
     * @type {string}
     * @memberof JurisdictionModel
     */
   placeFips: string;
    /**
     * @type {number}
     * @memberof JurisdictionModel
     */
   id?: number;
    /**
     * @type {Date}
     * @memberof JurisdictionModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof JurisdictionModel
     */
   endDate?: Date;
 }