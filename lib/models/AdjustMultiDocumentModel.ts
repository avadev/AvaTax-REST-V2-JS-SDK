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
import { CreateMultiDocumentModel } from "./CreateMultiDocumentModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Replace an existing MultiDocument transaction recorded in AvaTax with a new one.
 * @export
 * @class AdjustMultiDocumentModel
 */
 @JsonObject("AdjustMultiDocumentModel")
 export class AdjustMultiDocumentModel {
    /**
     * @type {Enums.AdjustmentReason}
     * @memberof AdjustMultiDocumentModel
     */
   @JsonProperty("adjustmentReason", Enums.AdjustmentReasonConverter)
   adjustmentReason: Enums.AdjustmentReason = undefined;
    /**
     * @type {string}
     * @memberof AdjustMultiDocumentModel
     */
   @JsonProperty("adjustDescription", String, true)
   adjustDescription?: string | undefined = undefined;
    /**
     * @type {CreateMultiDocumentModel}
     * @memberof AdjustMultiDocumentModel
     */
   @JsonProperty("newTransaction", CreateMultiDocumentModel)
   newTransaction: CreateMultiDocumentModel = undefined;
 }