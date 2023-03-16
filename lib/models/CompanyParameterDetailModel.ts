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
 * Represents a parameter associated with a company.
 * @export
 * @class CompanyParameterDetailModel
 */
 @JsonObject("CompanyParameterDetailModel")
 export class CompanyParameterDetailModel {
    /**
     * @type {number}
     * @memberof CompanyParameterDetailModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyParameterDetailModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyParameterDetailModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyParameterDetailModel
     */
   @JsonProperty("value", String)
   value: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyParameterDetailModel
     */
   @JsonProperty("unit", String, true)
   unit?: string | undefined = undefined;
 }