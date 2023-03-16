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
 * Represents a Premium Classification output model associated with an item's SystemCode..
 * @export
 * @class ItemPremiumClassificationOutputModel
 */
 @JsonObject("ItemPremiumClassificationOutputModel")
 export class ItemPremiumClassificationOutputModel {
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("systemCode", String, true)
   systemCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("justification", String, true)
   justification?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemPremiumClassificationOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
 }