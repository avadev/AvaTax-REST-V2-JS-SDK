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
 * Info model for Problem Detail
 * @export
 * @class TaxProfileErrorResponseModel
 */
 @JsonObject("TaxProfileErrorResponseModel")
 export class TaxProfileErrorResponseModel {
    /**
     * @type {string}
     * @memberof TaxProfileErrorResponseModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxProfileErrorResponseModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxProfileErrorResponseModel
     */
   @JsonProperty("detail", String, true)
   detail?: string | undefined = undefined;
 }