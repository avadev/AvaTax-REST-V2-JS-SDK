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
 * @class CompanyReturnSettingModel
 */
 @JsonObject("CompanyReturnSettingModel")
 export class CompanyReturnSettingModel {
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("companyReturnId", Number)
   companyReturnId: number = undefined;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("filingQuestionId", Number)
   filingQuestionId: number = undefined;
    /**
     * @type {string}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("filingQuestionCode", String, true)
   filingQuestionCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("value", String, true)
   value?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyReturnSettingModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }