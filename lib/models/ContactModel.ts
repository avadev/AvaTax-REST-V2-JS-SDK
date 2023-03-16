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
 * A contact person for a company.
 * @export
 * @class ContactModel
 */
 @JsonObject("ContactModel")
 export class ContactModel {
    /**
     * @type {number}
     * @memberof ContactModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("contactCode", String)
   contactCode: string = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("firstName", String, true)
   firstName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("middleName", String, true)
   middleName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("lastName", String, true)
   lastName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("email", String, true)
   email?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("phone", String, true)
   phone?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("mobile", String, true)
   mobile?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ContactModel
     */
   @JsonProperty("fax", String, true)
   fax?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ContactModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ContactModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ContactModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }