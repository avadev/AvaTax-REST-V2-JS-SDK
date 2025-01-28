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
import { FailedHSCodeClassificationModel } from "./FailedHSCodeClassificationModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The output model for an HS code classification.
 * @export
 * @class ItemHSCodeClassificationOutputModel
 */
 @JsonObject("ItemHSCodeClassificationOutputModel")
 export class ItemHSCodeClassificationOutputModel {
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationOutputModel
     */
   @JsonProperty("total", Number, true)
   total?: number | undefined = undefined;
    /**
     * @type {FailedHSCodeClassificationModel[]}
     * @memberof ItemHSCodeClassificationOutputModel
     */
   @JsonProperty("failed", [FailedHSCodeClassificationModel], true)
   failed?: FailedHSCodeClassificationModel[] | undefined = undefined;
 }