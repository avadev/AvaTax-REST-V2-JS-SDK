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
 * Product classification output model.
 * @export
 * @class ItemClassificationOutputModel
 */
 @JsonObject("ItemClassificationOutputModel")
 export class ItemClassificationOutputModel {
    /**
     * @type {number}
     * @memberof ItemClassificationOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemClassificationOutputModel
     */
   @JsonProperty("itemId", Number, true)
   itemId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemClassificationOutputModel
     */
   @JsonProperty("systemId", Number, true)
   systemId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemClassificationOutputModel
     */
   @JsonProperty("productCode", String, true)
   productCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemClassificationOutputModel
     */
   @JsonProperty("systemCode", String, true)
   systemCode?: string | undefined = undefined;
 }