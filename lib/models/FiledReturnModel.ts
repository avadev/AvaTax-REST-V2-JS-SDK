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
 * Filing Returns Model
 * @export
 * @class FiledReturnModel
 */
 @JsonObject("FiledReturnModel")
 export class FiledReturnModel {
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   @JsonProperty("endPeriodMonth", Number, true)
   endPeriodMonth?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FiledReturnModel
     */
   @JsonProperty("endPeriodYear", Number, true)
   endPeriodYear?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FiledReturnModel
     */
   @JsonProperty("taxformCode", String, true)
   taxformCode?: string | undefined = undefined;
 }