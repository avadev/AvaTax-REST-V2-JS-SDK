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
 * Represents a complex query request to parse using query filter guidelines from Microsoft REST standards
 * @export
 * @class QueryRequestModel
 */
 @JsonObject("QueryRequestModel")
 export class QueryRequestModel {
    /**
     * @type {string}
     * @memberof QueryRequestModel
     */
   @JsonProperty("filter", String, true)
   filter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof QueryRequestModel
     */
   @JsonProperty("include", String, true)
   include?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof QueryRequestModel
     */
   @JsonProperty("maxResults", Number, true)
   maxResults?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof QueryRequestModel
     */
   @JsonProperty("startIndex", Number, true)
   startIndex?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof QueryRequestModel
     */
   @JsonProperty("sortBy", String, true)
   sortBy?: string | undefined = undefined;
 }