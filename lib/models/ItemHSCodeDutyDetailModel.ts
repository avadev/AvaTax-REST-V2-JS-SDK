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
import { ItemHSCodeFTADetailModel } from "./ItemHSCodeFTADetailModel";
import { ItemHSCodeCvdAddDetailModel } from "./ItemHSCodeCvdAddDetailModel";
import { ItemHSCodePunitiveRateDetailModel } from "./ItemHSCodePunitiveRateDetailModel";
import { ItemHSCodeRestrictionDetailModel } from "./ItemHSCodeRestrictionDetailModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents HS Code Duty Details for an item.
 * @export
 * @class ItemHSCodeDutyDetailModel
 */
 @JsonObject("ItemHSCodeDutyDetailModel")
 export class ItemHSCodeDutyDetailModel {
    /**
     * @type {number}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("itemId", Number)
   itemId: number = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("countryOfImport", String)
   countryOfImport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("countryOfExport", String)
   countryOfExport: string = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("countryOfOrigin", String)
   countryOfOrigin: string = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("manufacturerName", String, true)
   manufacturerName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("mfnRate", String)
   mfnRate: string = undefined;
    /**
     * @type {string}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("uom", String)
   uom: string = undefined;
    /**
     * @type {Date}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {ItemHSCodeFTADetailModel[]}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("ftaDetails", [ItemHSCodeFTADetailModel], true)
   ftaDetails?: ItemHSCodeFTADetailModel[] | undefined = undefined;
    /**
     * @type {ItemHSCodeCvdAddDetailModel[]}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("cvdAddDetails", [ItemHSCodeCvdAddDetailModel], true)
   cvdAddDetails?: ItemHSCodeCvdAddDetailModel[] | undefined = undefined;
    /**
     * @type {ItemHSCodePunitiveRateDetailModel[]}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("punitiveRateDetails", [ItemHSCodePunitiveRateDetailModel], true)
   punitiveRateDetails?: ItemHSCodePunitiveRateDetailModel[] | undefined = undefined;
    /**
     * @type {ItemHSCodeRestrictionDetailModel[]}
     * @memberof ItemHSCodeDutyDetailModel
     */
   @JsonProperty("restrictionDetails", [ItemHSCodeRestrictionDetailModel], true)
   restrictionDetails?: ItemHSCodeRestrictionDetailModel[] | undefined = undefined;
 }