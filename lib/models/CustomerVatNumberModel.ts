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
 * Represents a VAT Number record for a company.
 * @export
 * @class CustomerVatNumberModel
 */
 @JsonObject("CustomerVatNumberModel")
 export class CustomerVatNumberModel {
    /**
     * @type {number}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("vatNumber", String)
   vatNumber: string = undefined;
    /**
     * @type {string}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("businessName", String, true)
   businessName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {number}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("vatNumberStatus", Number, true)
   vatNumberStatus?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("registeredBusinessName", String, true)
   registeredBusinessName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("businessNameStatus", Number, true)
   businessNameStatus?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("validationDate", DateConverter, true)
   validationDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("validationSource", String, true)
   validationSource?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomerVatNumberModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }