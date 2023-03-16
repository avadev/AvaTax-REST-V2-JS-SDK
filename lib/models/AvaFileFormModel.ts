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
 * Represents information about a tax form known to Avalara
 * @export
 * @class AvaFileFormModel
 */
 @JsonObject("AvaFileFormModel")
 export class AvaFileFormModel {
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("returnName", String, true)
   returnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("formName", String, true)
   formName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {Enums.FormTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("formTypeId", Enums.FormTypeIdConverter, true)
   formTypeId?: Enums.FormTypeId | undefined = undefined;
    /**
     * @type {Enums.FilingOptionTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("filingOptionTypeId", Enums.FilingOptionTypeIdConverter, true)
   filingOptionTypeId?: Enums.FilingOptionTypeId | undefined = undefined;
    /**
     * @type {Enums.DueDateTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("dueDateTypeId", Enums.DueDateTypeIdConverter, true)
   dueDateTypeId?: Enums.DueDateTypeId | undefined = undefined;
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("dueDay", Number, true)
   dueDay?: number | undefined = undefined;
    /**
     * @type {Enums.DueDateTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("efileDueDateTypeId", Enums.DueDateTypeIdConverter, true)
   efileDueDateTypeId?: Enums.DueDateTypeId | undefined = undefined;
    /**
     * @type {number}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("efileDueDay", Number, true)
   efileDueDay?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("efileDueTime", DateConverter, true)
   efileDueTime?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("hasVendorDiscount", Boolean, true)
   hasVendorDiscount?: boolean | undefined = undefined;
    /**
     * @type {Enums.RoundingTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("roundingTypeId", Enums.RoundingTypeIdConverter, true)
   roundingTypeId?: Enums.RoundingTypeId | undefined = undefined;
    /**
     * @type {Enums.OutletTypeId}
     * @memberof AvaFileFormModel
     */
   @JsonProperty("outletTypeId", Enums.OutletTypeIdConverter, true)
   outletTypeId?: Enums.OutletTypeId | undefined = undefined;
 }