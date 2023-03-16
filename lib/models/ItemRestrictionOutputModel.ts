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
 * Represents a parameter associated with an item.
 * @export
 * @class ItemRestrictionOutputModel
 */
 @JsonObject("ItemRestrictionOutputModel")
 export class ItemRestrictionOutputModel {
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("countryOfImport", String, true)
   countryOfImport?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("countryOfExport", String, true)
   countryOfExport?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("countryOfManufacture", String, true)
   countryOfManufacture?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("hsCode", String, true)
   hsCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("itemCode", String, true)
   itemCode?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("restrictionType", String, true)
   restrictionType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("regulation", String, true)
   regulation?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("governmentAgency", String, true)
   governmentAgency?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("complianceMessage", String, true)
   complianceMessage?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemRestrictionOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
 }