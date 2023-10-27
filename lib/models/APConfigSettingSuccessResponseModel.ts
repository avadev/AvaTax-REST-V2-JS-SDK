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
 }