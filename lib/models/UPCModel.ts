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
 * One Universal Product Code object as defined for your company.
 * @export
 * @class UPCModel
 */
 @JsonObject("UPCModel")
 export class UPCModel {
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   @JsonProperty("upc", String)
   upc: string = undefined;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   @JsonProperty("legacyTaxCode", String, true)
   legacyTaxCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UPCModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("usage", Number, true)
   usage?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("isSystem", Number, true)
   isSystem?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof UPCModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof UPCModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }