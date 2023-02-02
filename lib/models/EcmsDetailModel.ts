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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents an ECMS record, used internally by AvaTax to track information about exemptions.
 * @export
 * @interface EcmsDetailModel
 */
 export interface EcmsDetailModel {
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   exemptCertDetailId: number;
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   exemptCertId: number;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   stateFips: string;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   region: string;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   idNo?: string;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   country: string;
    /**
     * @type {Date}
     * @memberof EcmsDetailModel
     */
   endDate?: Date;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   idType?: string;
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   isTaxCodeListExclusionList?: number;
    /**
     * @type {Models.EcmsDetailTaxCodeModel[]}
     * @memberof EcmsDetailModel
     */
   taxCodes?: Models.EcmsDetailTaxCodeModel[];
 }