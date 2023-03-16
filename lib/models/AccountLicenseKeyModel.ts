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
 * An account user who is permitted to use AvaTax.
 * @export
 * @class AccountLicenseKeyModel
 */
 @JsonObject("AccountLicenseKeyModel")
 export class AccountLicenseKeyModel {
    /**
     * @type {string}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {number}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {Date}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountLicenseKeyModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }