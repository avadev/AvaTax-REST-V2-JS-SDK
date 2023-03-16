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
 * Represents a tax code that can be applied to items on a transaction.
A tax code can have specific rules for specific jurisdictions that change the tax calculation behavior.
 * @export
 * @class TaxCodeModel
 */
 @JsonObject("TaxCodeModel")
 export class TaxCodeModel {
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   @JsonProperty("taxCode", String)
   taxCode: string = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   @JsonProperty("taxCodeTypeId", String)
   taxCodeTypeId: string = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   @JsonProperty("parentTaxCode", String, true)
   parentTaxCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   @JsonProperty("isPhysical", Boolean, true)
   isPhysical?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   @JsonProperty("goodsServiceCode", Number, true)
   goodsServiceCode?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxCodeModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxCodeModel
     */
   @JsonProperty("isSSTCertified", Boolean, true)
   isSSTCertified?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxCodeModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxCodeModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxCodeModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }