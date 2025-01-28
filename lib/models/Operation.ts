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
 * 
 * @export
 * @class Operation
 */
 @JsonObject("Operation")
 export class Operation {
    /**
     * @type {object}
     * @memberof Operation
     */
   @JsonProperty("value", Object, true)
   value?: object | undefined = undefined;
    /**
     * @type {string}
     * @memberof Operation
     */
   @JsonProperty("path", String, true)
   path?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof Operation
     */
   @JsonProperty("op", String, true)
   op?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof Operation
     */
   @JsonProperty("from", String, true)
   from?: string | undefined = undefined;
 }