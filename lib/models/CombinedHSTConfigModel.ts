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
 * An AvaTax account.
 * @export
 * @class CombinedHSTConfigModel
 */
 @JsonObject("CombinedHSTConfigModel")
 export class CombinedHSTConfigModel {
    /**
     * @type {number}
     * @memberof CombinedHSTConfigModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {string[]}
     * @memberof CombinedHSTConfigModel
     */
   @JsonProperty("excludedCompanyCodes", [String], true)
   excludedCompanyCodes?: string[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CombinedHSTConfigModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }