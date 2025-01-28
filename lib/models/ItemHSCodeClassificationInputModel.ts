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
 * Input model of the HS code classification.
 * @export
 * @class ItemHSCodeClassificationInputModel
 */
 @JsonObject("ItemHSCodeClassificationInputModel")
 export class ItemHSCodeClassificationInputModel {
    /**
     * @type {number}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("itemId", Number)
   itemId: number = undefined;
    /**
     * @type {string[]}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("countryOfDestinations", [String])
   countryOfDestinations: string[] = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isPremiumClassification", Boolean, true)
   isPremiumClassification?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isReclassification", Boolean, true)
   isReclassification?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isDisputed", Boolean, true)
   isDisputed?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isPriority", Boolean, true)
   isPriority?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isExport", Boolean, true)
   isExport?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("isExportControl", Boolean, true)
   isExportControl?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("instructions", String, true)
   instructions?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeClassificationInputModel
     */
   @JsonProperty("language", String, true)
   language?: string | undefined = undefined;
 }