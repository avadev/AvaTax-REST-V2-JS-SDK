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
import { CompanyAddress } from "./CompanyAddress";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a request for a new account with Avalara for a new Firm client.
 * @export
 * @class NewFirmClientAccountRequestModel
 */
 @JsonObject("NewFirmClientAccountRequestModel")
 export class NewFirmClientAccountRequestModel {
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("accountName", String)
   accountName: string = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("firstName", String)
   firstName: string = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("lastName", String)
   lastName: string = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("phoneNumber", String, true)
   phoneNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("email", String)
   email: string = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("companyCode", String, true)
   companyCode?: string | undefined = undefined;
    /**
     * @type {CompanyAddress}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("companyAddress", CompanyAddress)
   companyAddress: CompanyAddress = undefined;
    /**
     * @type {string}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("taxPayerIdNumber", String, true)
   taxPayerIdNumber?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof NewFirmClientAccountRequestModel
     */
   @JsonProperty("properties", [String], true)
   properties?: string[] | undefined = undefined;
 }