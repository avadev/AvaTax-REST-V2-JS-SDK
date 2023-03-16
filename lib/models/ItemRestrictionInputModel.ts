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
 * @class ItemRestrictionInputModel
 */
 @JsonObject("ItemRestrictionInputModel")
 export class ItemRestrictionInputModel {
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("itemCode", String)
   itemCode: string = undefined;
    /**
     * @type {number}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("hsCode", String)
   hsCode: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("countryOfImport", String)
   countryOfImport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("countryOfExport", String)
   countryOfExport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("countryOfManufacture", String)
   countryOfManufacture: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("restrictionType", String)
   restrictionType: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("regulation", String)
   regulation: string = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("governmentAgency", String, true)
   governmentAgency?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemRestrictionInputModel
     */
   @JsonProperty("complianceMessage", String, true)
   complianceMessage?: string | undefined = undefined;
 }