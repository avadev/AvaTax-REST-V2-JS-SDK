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
 * Descibes a record of an account granting TSA accounts write access.
See AVT-25316
 * @export
 * @class AccountTsaAccessModel
 */
 @JsonObject("AccountTsaAccessModel")
 export class AccountTsaAccessModel {
    /**
     * @type {number}
     * @memberof AccountTsaAccessModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountTsaAccessModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountTsaAccessModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountTsaAccessModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }