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
 * Represents an Avalara-supported system tax code as returned by the ListTaxCodes definitions API.
Extends Avalara.AvaTax.AccountServices.Models.v2.TaxCodeModel with fields that are exposed only on `GET /api/definitions/taxcodes`.
 * @export
 * @class TaxCodeDefinitionModel
 */
 @JsonObject("TaxCodeDefinitionModel")
 export class TaxCodeDefinitionModel {
    /**
     * @type {number}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("taxCode", String)
   taxCode: string = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("taxCodeTypeId", String)
   taxCodeTypeId: string = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("parentTaxCode", String, true)
   parentTaxCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("isPhysical", Boolean, true)
   isPhysical?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("goodsServiceCode", Number, true)
   goodsServiceCode?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("isSSTCertified", Boolean, true)
   isSSTCertified?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("subCategory", String, true)
   subCategory?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeDefinitionModel
     */
   @JsonProperty("hasParameters", Boolean, true)
   hasParameters?: boolean | undefined = undefined;
 }