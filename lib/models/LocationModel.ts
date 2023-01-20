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
 * A location where this company does business.
Some jurisdictions may require you to list all locations where your company does business.
 * @export
 * @interface LocationModel
 */
 export interface LocationModel {
    /**
     * @type {number}
     * @memberof LocationModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   locationCode: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   description?: string;
    /**
     * @type {Enums.AddressTypeId}
     * @memberof LocationModel
     */
   addressTypeId: Enums.AddressTypeId;
    /**
     * @type {Enums.AddressCategoryId}
     * @memberof LocationModel
     */
   addressCategoryId: Enums.AddressCategoryId;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   isMarketplaceOutsideUsa?: boolean;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   line1: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   line2?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   line3?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   county?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   postalCode: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   country: string;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   isDefault?: boolean;
    /**
     * @type {boolean}
     * @memberof LocationModel
     */
   isRegistered?: boolean;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   dbaName?: string;
    /**
     * @type {string}
     * @memberof LocationModel
     */
   outletName?: string;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   endDate?: Date;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   lastTransactionDate?: Date;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   registeredDate?: Date;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof LocationModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof LocationModel
     */
   modifiedUserId?: number;
    /**
     * @type {Models.LocationSettingModel[]}
     * @memberof LocationModel
     */
   settings?: Models.LocationSettingModel[];
    /**
     * @type {Models.LocationParameterModel[]}
     * @memberof LocationModel
     */
   parameters?: Models.LocationParameterModel[];
 }