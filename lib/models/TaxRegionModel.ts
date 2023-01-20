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
 * The tax region model.
 * @export
 * @interface TaxRegionModel
 */
 export interface TaxRegionModel {
    /**
     * @type {number}
     * @memberof TaxRegionModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   code?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   county?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   city?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   serCode?: string;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   signatureCode?: string;
    /**
     * @type {Date}
     * @memberof TaxRegionModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof TaxRegionModel
     */
   endDate?: Date;
    /**
     * @type {boolean}
     * @memberof TaxRegionModel
     */
   isAcm?: boolean;
    /**
     * @type {boolean}
     * @memberof TaxRegionModel
     */
   isSst?: boolean;
    /**
     * @type {Models.DenormalizedJurisModel[]}
     * @memberof TaxRegionModel
     */
   jurisdictions?: Models.DenormalizedJurisModel[];
 }