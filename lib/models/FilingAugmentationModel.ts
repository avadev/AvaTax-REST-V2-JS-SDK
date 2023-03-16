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
 * A model for return augmentations.
 * @export
 * @class FilingAugmentationModel
 */
 @JsonObject("FilingAugmentationModel")
 export class FilingAugmentationModel {
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("filingId", Number, true)
   filingId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("fieldAmount", Number)
   fieldAmount: number = undefined;
    /**
     * @type {string}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("fieldName", String)
   fieldName: string = undefined;
    /**
     * @type {Date}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingAugmentationModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }