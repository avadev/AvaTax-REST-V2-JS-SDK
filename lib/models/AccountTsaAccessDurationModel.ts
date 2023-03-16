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
 * Specifies a duration for which to grant TSA accounts write access.
See AVT-25316
 * @export
 * @class AccountTsaAccessDurationModel
 */
 @JsonObject("AccountTsaAccessDurationModel")
 export class AccountTsaAccessDurationModel {
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   @JsonProperty("minutes", Number, true)
   minutes?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   @JsonProperty("hours", Number, true)
   hours?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   @JsonProperty("days", Number, true)
   days?: number | undefined = undefined;
 }