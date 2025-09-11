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
import { TaxProfileMetaDataModel } from "./TaxProfileMetaDataModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * AP Config Setting Response Model
 * @export
 * @class APConfigSettingSuccessResponseModel
 */
 @JsonObject("APConfigSettingSuccessResponseModel")
 export class APConfigSettingSuccessResponseModel {
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("ruleId", Number, true)
   ruleId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {TaxProfileMetaDataModel}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("meta", TaxProfileMetaDataModel, true)
   meta?: TaxProfileMetaDataModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("amount", Number, true)
   amount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("amountToMarkForReview", Number, true)
   amountToMarkForReview?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("varianceForIgnore", Number, true)
   varianceForIgnore?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("varianceForAccrue", Number, true)
   varianceForAccrue?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("variancePercent", Number, true)
   variancePercent?: number | undefined = undefined;
    /**
     * @type {Enums.ApConfigToleranceType}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("apConfigToleranceType", Enums.ApConfigToleranceTypeConverter, true)
   apConfigToleranceType?: Enums.ApConfigToleranceType | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("payAsBilledNoAccrual", Number, true)
   payAsBilledNoAccrual?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("payAsBilledAccrueUndercharge", Number, true)
   payAsBilledAccrueUndercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("shortPayItemsAccrueUndercharge", Number, true)
   shortPayItemsAccrueUndercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("markForReviewUndercharge", Number, true)
   markForReviewUndercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("rejectUndercharge", Number, true)
   rejectUndercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("payAsBilledOvercharge", Number, true)
   payAsBilledOvercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("shortPayAvalaraCalculated", Number, true)
   shortPayAvalaraCalculated?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("shortPayItemsAccrueOvercharge", Number, true)
   shortPayItemsAccrueOvercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("markForReviewOvercharge", Number, true)
   markForReviewOvercharge?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("rejectOvercharge", Number, true)
   rejectOvercharge?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof APConfigSettingSuccessResponseModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
 }