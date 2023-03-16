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
 * Use this object to provide an address and date range where your company does business.
This address will be used to determine what jurisdictions you should declare nexus and
calculate tax.
 * @export
 * @class DeclareNexusByAddressModel
 */
 @JsonObject("DeclareNexusByAddressModel")
 export class DeclareNexusByAddressModel {
    /**
     * @type {Date}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("taxTypeGroup", String, true)
   taxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("nexusTaxTypeGroup", String, true)
   nexusTaxTypeGroup?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {Enums.TextCase}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("textCase", Enums.TextCaseConverter, true)
   textCase?: Enums.TextCase | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("latitude", Number, true)
   latitude?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DeclareNexusByAddressModel
     */
   @JsonProperty("longitude", Number, true)
   longitude?: number | undefined = undefined;
 }