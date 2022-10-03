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
 * Information about a tax authority relevant for an address.
 * @export
 * @interface TaxAuthorityInfo
 */
 export interface TaxAuthorityInfo {
    /**
     * @type {string}
     * @memberof TaxAuthorityInfo
     */
   avalaraId: string;
    /**
     * @type {string}
     * @memberof TaxAuthorityInfo
     */
   jurisdictionName: string;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof TaxAuthorityInfo
     */
   jurisdictionType?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof TaxAuthorityInfo
     */
   signatureCode: string;
 }