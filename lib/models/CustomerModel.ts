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
 * Represents a customer to whom you sell products and/or services.
 * @export
 * @interface CustomerModel
 */
 export interface CustomerModel {
    /**
     * @type {number}
     * @memberof CustomerModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CustomerModel
     */
   companyId: number;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   customerCode: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   alternateId: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   attnName: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   line1: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   line2: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   city: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   postalCode: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   phoneNumber: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   faxNumber: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   emailAddress: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   contactName: string;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   lastTransaction?: Date;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof CustomerModel
     */
   modifiedDate?: Date;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   country: string;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   region: string;
    /**
     * @type {boolean}
     * @memberof CustomerModel
     */
   isBill?: boolean;
    /**
     * @type {boolean}
     * @memberof CustomerModel
     */
   isShip?: boolean;
    /**
     * @type {string}
     * @memberof CustomerModel
     */
   taxpayerIdNumber: string;
    /**
     * @type {Models.CertificateModel[]}
     * @memberof CustomerModel
     */
   certificates: Models.CertificateModel[];
    /**
     * @type {Models.CustomFieldModel[]}
     * @memberof CustomerModel
     */
   customFields: Models.CustomFieldModel[];
    /**
     * @type {Models.ExposureZoneModel[]}
     * @memberof CustomerModel
     */
   exposureZones: Models.ExposureZoneModel[];
    /**
     * @type {Models.CustomerModel[]}
     * @memberof CustomerModel
     */
   shipTos: Models.CustomerModel[];
    /**
     * @type {Models.CustomerAttributeModel[]}
     * @memberof CustomerModel
     */
   attributes: Models.CustomerAttributeModel[];
 }