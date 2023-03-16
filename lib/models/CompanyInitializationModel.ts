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
 * Company Initialization Model
 * @export
 * @class CompanyInitializationModel
 */
 @JsonObject("CompanyInitializationModel")
 export class CompanyInitializationModel {
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("vatRegistrationId", String, true)
   vatRegistrationId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("taxpayerIdNumber", String, true)
   taxpayerIdNumber?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("isFein", Boolean, true)
   isFein?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("line1", String)
   line1: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("city", String)
   city: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("postalCode", String)
   postalCode: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("firstName", String)
   firstName: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("lastName", String)
   lastName: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("email", String)
   email: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("phoneNumber", String)
   phoneNumber: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("mobileNumber", String, true)
   mobileNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("faxNumber", String, true)
   faxNumber?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyInitializationModel
     */
   @JsonProperty("parentCompanyId", Number, true)
   parentCompanyId?: number | undefined = undefined;
 }