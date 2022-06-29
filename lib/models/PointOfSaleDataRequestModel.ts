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
 * Point-of-Sale Data Request Model
 * @export
 * @interface PointOfSaleDataRequestModel
 */
 export interface PointOfSaleDataRequestModel {
    /**
     * @type {string}
     * @memberof PointOfSaleDataRequestModel
     */
   companyCode: string;
    /**
     * @type {Date}
     * @memberof PointOfSaleDataRequestModel
     */
   documentDate?: Date;
    /**
     * @type {Enums.PointOfSaleFileType}
     * @memberof PointOfSaleDataRequestModel
     */
   responseType?: Enums.PointOfSaleFileType;
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   taxCodes: string[];
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   itemCodes: string[];
    /**
     * @type {string[]}
     * @memberof PointOfSaleDataRequestModel
     */
   locationCodes: string[];
    /**
     * @type {boolean}
     * @memberof PointOfSaleDataRequestModel
     */
   includeJurisCodes?: boolean;
    /**
     * @type {Enums.PointOfSalePartnerId}
     * @memberof PointOfSaleDataRequestModel
     */
   partnerId?: Enums.PointOfSalePartnerId;
 }