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
 * The HS code classification error model.
 * @export
 * @class HSCodeClassificationError
 */
 @JsonObject("HSCodeClassificationError")
 export class HSCodeClassificationError {
    /**
     * @type {string}
     * @memberof HSCodeClassificationError
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HSCodeClassificationError
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HSCodeClassificationError
     */
   @JsonProperty("target", String, true)
   target?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HSCodeClassificationError
     */
   @JsonProperty("faultCode", String, true)
   faultCode?: string | undefined = undefined;
 }