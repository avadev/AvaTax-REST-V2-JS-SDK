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
 * @class CustomerSupplierCountryParamModel
 */
 @JsonObject("CustomerSupplierCountryParamModel")
 export class CustomerSupplierCountryParamModel {
    /**
     * @type {number}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("customerId", Number, true)
   customerId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("customerCode", String, true)
   customerCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("isEstablished", Boolean, true)
   isEstablished?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("businessIdentificationNo", String, true)
   businessIdentificationNo?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerSupplierCountryParamModel
     */
   @JsonProperty("isRegisteredThroughFiscalRep", Boolean, true)
   isRegisteredThroughFiscalRep?: boolean | undefined = undefined;
 }