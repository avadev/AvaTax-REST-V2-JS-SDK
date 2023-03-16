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
import { FilingAnswerModel } from "./FilingAnswerModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a commitment to file a tax return on a recurring basis.
Only used if you subscribe to Avalara Returns.
 * @export
 * @class FilingRequestDataModel
 */
 @JsonObject("FilingRequestDataModel")
 export class FilingRequestDataModel {
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("companyReturnId", Number, true)
   companyReturnId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("returnName", String, true)
   returnName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("taxFormCode", String, true)
   taxFormCode?: string | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("filingFrequencyId", Enums.FilingFrequencyIdConverter)
   filingFrequencyId: Enums.FilingFrequencyId = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("registrationId", String, true)
   registrationId?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("months", Number)
   months: number = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("fiscalYearStartMonth", Number, true)
   fiscalYearStartMonth?: number | undefined = undefined;
    /**
     * @type {Enums.MatchingTaxType}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("taxTypeId", Enums.MatchingTaxTypeConverter, true)
   taxTypeId?: Enums.MatchingTaxType | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("locationCode", String, true)
   locationCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("effDate", DateConverter)
   effDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("isClone", Boolean, true)
   isClone?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("autoLockOverrideDay", Number, true)
   autoLockOverrideDay?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("taxAuthorityName", String, true)
   taxAuthorityName?: string | undefined = undefined;
    /**
     * @type {FilingAnswerModel[]}
     * @memberof FilingRequestDataModel
     */
   @JsonProperty("answers", [FilingAnswerModel], true)
   answers?: FilingAnswerModel[] | undefined = undefined;
 }