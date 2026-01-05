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
import { ErrorDetail } from "./ErrorDetail";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about the error that occurred
 * @export
 * @class ErrorInfo
 */
 @JsonObject("ErrorInfo")
 export class ErrorInfo {
    /**
     * @type {Enums.ErrorCodeId}
     * @memberof ErrorInfo
     */
   @JsonProperty("code", Enums.ErrorCodeIdConverter, true)
   code?: Enums.ErrorCodeId | undefined = undefined;
    /**
     * @type {string}
     * @memberof ErrorInfo
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {Enums.ErrorTargetCode}
     * @memberof ErrorInfo
     */
   @JsonProperty("target", Enums.ErrorTargetCodeConverter, true)
   target?: Enums.ErrorTargetCode | undefined = undefined;
    /**
     * @type {ErrorDetail[]}
     * @memberof ErrorInfo
     */
   @JsonProperty("details", [ErrorDetail], true)
   details?: ErrorDetail[] | undefined = undefined;
 }