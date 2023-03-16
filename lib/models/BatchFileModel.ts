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
 * Represents one file in a batch upload.
 * @export
 * @class BatchFileModel
 */
 @JsonObject("BatchFileModel")
 export class BatchFileModel {
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   @JsonProperty("batchId", Number, true)
   batchId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   @JsonProperty("content", String)
   content: string = undefined;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   @JsonProperty("contentLength", Number, true)
   contentLength?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   @JsonProperty("contentType", String, true)
   contentType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   @JsonProperty("fileExtension", String, true)
   fileExtension?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof BatchFileModel
     */
   @JsonProperty("filePath", String, true)
   filePath?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof BatchFileModel
     */
   @JsonProperty("errorCount", Number, true)
   errorCount?: number | undefined = undefined;
 }