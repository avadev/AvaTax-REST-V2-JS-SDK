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
import { ClassificationDetailsModel } from "./ClassificationDetailsModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a tax code classification request status output model
 * @export
 * @class ItemTaxCodeClassificationRequestStatusOutputModel
 */
 @JsonObject("ItemTaxCodeClassificationRequestStatusOutputModel")
 export class ItemTaxCodeClassificationRequestStatusOutputModel {
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestStatusOutputModel
     */
   @JsonProperty("requestId", Number, true)
   requestId?: number | undefined = undefined;
    /**
     * @type {ClassificationDetailsModel}
     * @memberof ItemTaxCodeClassificationRequestStatusOutputModel
     */
   @JsonProperty("classificationDetails", ClassificationDetailsModel, true)
   classificationDetails?: ClassificationDetailsModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestStatusOutputModel
     */
   @JsonProperty("totalItems", Number, true)
   totalItems?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestStatusOutputModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemTaxCodeClassificationRequestStatusOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
 }