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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * 
 * @export
 * @interface CompanyReturnSettingModel
 */
 export interface CompanyReturnSettingModel {
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   companyReturnId: number;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   filingQuestionId: number;
    /**
     * @type {string}
     * @memberof CompanyReturnSettingModel
     */
   filingQuestionCode?: string;
    /**
     * @type {string}
     * @memberof CompanyReturnSettingModel
     */
   value?: string;
    /**
     * @type {Date}
     * @memberof CompanyReturnSettingModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof CompanyReturnSettingModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   modifiedUserId?: number;
 }