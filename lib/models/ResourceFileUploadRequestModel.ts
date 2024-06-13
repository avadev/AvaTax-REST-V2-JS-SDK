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
 * A request to upload a file to Resource Files
 * @export
 * @class ResourceFileUploadRequestModel
 */
 @JsonObject("ResourceFileUploadRequestModel")
 export class ResourceFileUploadRequestModel {
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("content", String)
   content: string = undefined;
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("username", String, true)
   username?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ResourceFileUploadRequestModel
     */
   @JsonProperty("length", Number, true)
   length?: number | undefined = undefined;
 }