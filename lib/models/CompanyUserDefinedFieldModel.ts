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
 * 
 * @export
 * @interface CompanyUserDefinedFieldModel
 */
 export interface CompanyUserDefinedFieldModel {
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof CompanyUserDefinedFieldModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof CompanyUserDefinedFieldModel
     */
   friendlyName: string;
    /**
     * @type {Enums.UserDefinedFieldDataType}
     * @memberof CompanyUserDefinedFieldModel
     */
   dataType?: Enums.UserDefinedFieldDataType;
    /**
     * @type {Enums.UserDefinedFieldType}
     * @memberof CompanyUserDefinedFieldModel
     */
   userDefinedFieldType?: Enums.UserDefinedFieldType;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof CompanyUserDefinedFieldModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   modifiedUserId?: number;
    /**
     * @type {Date}
     * @memberof CompanyUserDefinedFieldModel
     */
   modifiedDate?: Date;
 }