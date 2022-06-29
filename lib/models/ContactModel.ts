/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A contact person for a company.
 * @export
 * @interface ContactModel
 */
 export interface ContactModel {
    /**
     * @type {number}
     * @memberof ContactModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   contactCode: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   middleName: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   title: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   line1: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   line2: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   line3: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   city: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   postalCode: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   phone: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   mobile: string;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   fax: string;
    /**
     * @type {Date}
     * @memberof ContactModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof ContactModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   modifiedUserId?: number;
 }