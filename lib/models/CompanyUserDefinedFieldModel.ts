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
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class CompanyUserDefinedFieldModel
 */
 @JsonObject("CompanyUserDefinedFieldModel")
 export class CompanyUserDefinedFieldModel {
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("friendlyName", String)
   friendlyName: string = undefined;
    /**
     * @type {Enums.UserDefinedFieldDataType}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("dataType", Enums.UserDefinedFieldDataTypeConverter, true)
   dataType?: Enums.UserDefinedFieldDataType | undefined = undefined;
    /**
     * @type {Enums.UserDefinedFieldType}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("userDefinedFieldType", Enums.UserDefinedFieldTypeConverter, true)
   userDefinedFieldType?: Enums.UserDefinedFieldType | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyUserDefinedFieldModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }