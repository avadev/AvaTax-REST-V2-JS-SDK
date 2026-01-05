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
 * Represents HS Code Restriction Details.
 * @export
 * @class ItemHSCodeRestrictionDetailModel
 */
 @JsonObject("ItemHSCodeRestrictionDetailModel")
 export class ItemHSCodeRestrictionDetailModel {
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("regulation", String, true)
   regulation?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("summary", String, true)
   summary?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("governmentAgency", String, true)
   governmentAgency?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("complianceTitle", String, true)
   complianceTitle?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("complianceMessage", String, true)
   complianceMessage?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeRestrictionDetailModel
     */
   @JsonProperty("complianceCitation", String, true)
   complianceCitation?: string | undefined = undefined;
 }