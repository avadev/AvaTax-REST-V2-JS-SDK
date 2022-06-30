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
 * Represents information about a single legal taxing jurisdiction within a specific Avalara tax region.
 * @export
 * @interface DenormalizedJurisModel
 */
 export interface DenormalizedJurisModel {
    /**
     * @type {Date}
     * @memberof DenormalizedJurisModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof DenormalizedJurisModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   jurisCode: string;
    /**
     * @type {number}
     * @memberof DenormalizedJurisModel
     */
   jurisdictionId?: number;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof DenormalizedJurisModel
     */
   jurisType?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   jurisName: string;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   stateAssignedCode: string;
    /**
     * @type {number}
     * @memberof DenormalizedJurisModel
     */
   taxAuthorityId?: number;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   state: string;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   county: string;
    /**
     * @type {string}
     * @memberof DenormalizedJurisModel
     */
   city: string;
    /**
     * @type {boolean}
     * @memberof DenormalizedJurisModel
     */
   isAcm?: boolean;
    /**
     * @type {boolean}
     * @memberof DenormalizedJurisModel
     */
   isSst?: boolean;
 }