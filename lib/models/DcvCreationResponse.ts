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
import { DcvViewModel } from "./DcvViewModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Model used for Domain control verification response
 * @export
 * @class DcvCreationResponse
 */
 @JsonObject("DcvCreationResponse")
 export class DcvCreationResponse {
    /**
     * @type {string}
     * @memberof DcvCreationResponse
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {DcvViewModel}
     * @memberof DcvCreationResponse
     */
   @JsonProperty("dcvViewModel", DcvViewModel, true)
   dcvViewModel?: DcvViewModel | undefined = undefined;
 }