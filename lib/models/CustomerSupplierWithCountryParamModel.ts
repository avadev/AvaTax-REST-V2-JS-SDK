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
 * Represents a customer with its country parameter information.
This model combines CustomerSupplier and CustomerSupplierCountryParam data.
 * @export
 * @class CustomerSupplierWithCountryParamModel
 */
 @JsonObject("CustomerSupplierWithCountryParamModel")
 export class CustomerSupplierWithCountryParamModel {
    /**
     * @type {number}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("customerId", Number, true)
   customerId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("customerCode", String, true)
   customerCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("customerTypeId", Number, true)
   customerTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("customerSupplierCountryParamId", Number, true)
   customerSupplierCountryParamId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("isEstablished", Boolean, true)
   isEstablished?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("isRegisteredThroughFiscalRep", Boolean, true)
   isRegisteredThroughFiscalRep?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("vatNumber", String, true)
   vatNumber?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierWithCountryParamModel
     */
   @JsonProperty("vatNumberStatus", Number, true)
   vatNumberStatus?: number | undefined = undefined;
 }