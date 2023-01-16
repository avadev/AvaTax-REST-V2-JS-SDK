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
 * Use this object to provide an address and date range where your company does business.
This address will be used to determine what jurisdictions you should declare nexus and
calculate tax.
 * @export
 * @interface DeclareNexusByAddressModel
 */
 export interface DeclareNexusByAddressModel {
    /**
     * @type {Date}
     * @memberof DeclareNexusByAddressModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof DeclareNexusByAddressModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   taxTypeGroup?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   nexusTaxTypeGroup?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   line1?: string;
    /**
     * @type {Enums.TextCase}
     * @memberof DeclareNexusByAddressModel
     */
   textCase?: Enums.TextCase;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   line3?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   postalCode?: string;
    /**
     * @type {number}
     * @memberof DeclareNexusByAddressModel
     */
   latitude?: number;
    /**
     * @type {number}
     * @memberof DeclareNexusByAddressModel
     */
   longitude?: number;
 }