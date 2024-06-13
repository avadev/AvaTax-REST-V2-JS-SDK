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
import { GLAccountUploadErrorModel } from "./GLAccountUploadErrorModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a bulk upload response model.
 * @export
 * @class GLAccountBulkUploadOutputModel
 */
 @JsonObject("GLAccountBulkUploadOutputModel")
 export class GLAccountBulkUploadOutputModel {
    /**
     * @type {number}
     * @memberof GLAccountBulkUploadOutputModel
     */
   @JsonProperty("total", Number, true)
   total?: number | undefined = undefined;
    /**
     * @type {GLAccountUploadErrorModel[]}
     * @memberof GLAccountBulkUploadOutputModel
     */
   @JsonProperty("failed", [GLAccountUploadErrorModel], true)
   failed?: GLAccountUploadErrorModel[] | undefined = undefined;
 }