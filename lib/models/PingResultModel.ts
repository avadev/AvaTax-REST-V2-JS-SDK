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
 * Ping Result Model
 * @export
 * @class PingResultModel
 */
 @JsonObject("PingResultModel")
 export class PingResultModel {
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   @JsonProperty("version", String, true)
   version?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticated", Boolean, true)
   authenticated?: boolean | undefined = undefined;
    /**
     * @type {Enums.AuthenticationTypeId}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticationType", Enums.AuthenticationTypeIdConverter, true)
   authenticationType?: Enums.AuthenticationTypeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticatedUserName", String, true)
   authenticatedUserName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticatedUserId", Number, true)
   authenticatedUserId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticatedAccountId", Number, true)
   authenticatedAccountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof PingResultModel
     */
   @JsonProperty("authenticatedCompanyId", Number, true)
   authenticatedCompanyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof PingResultModel
     */
   @JsonProperty("crmid", String, true)
   crmid?: string | undefined = undefined;
 }