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
import { ItemTaxCodeModel } from "./ItemTaxCodeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents item tax code recommendations model
 * @export
 * @class ItemTaxCodeRecommendationsOutputModel
 */
 @JsonObject("ItemTaxCodeRecommendationsOutputModel")
 export class ItemTaxCodeRecommendationsOutputModel {
    /**
     * @type {string}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {ItemTaxCodeModel[]}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   @JsonProperty("recommendations", [ItemTaxCodeModel], true)
   recommendations?: ItemTaxCodeModel[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   @JsonProperty("url", String, true)
   url?: string | undefined = undefined;
 }