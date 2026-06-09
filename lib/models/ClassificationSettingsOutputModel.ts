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
import { ClassificationCriteriaModel } from "./ClassificationCriteriaModel";
import { CountryScopeModel } from "./CountryScopeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * API response for classification settings, including optimistic versioning and pipeline state.
 * @export
 * @class ClassificationSettingsOutputModel
 */
 @JsonObject("ClassificationSettingsOutputModel")
 export class ClassificationSettingsOutputModel {
    /**
     * @type {number}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("mode", String, true)
   mode?: string | undefined = undefined;
    /**
     * @type {ClassificationCriteriaModel}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("criteria", ClassificationCriteriaModel, true)
   criteria?: ClassificationCriteriaModel | undefined = undefined;
    /**
     * @type {CountryScopeModel}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("countryScope", CountryScopeModel, true)
   countryScope?: CountryScopeModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("settingsVersion", Number, true)
   settingsVersion?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("processingState", String, true)
   processingState?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("processingVersion", Number, true)
   processingVersion?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("processingStartedDate", DateConverter, true)
   processingStartedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("processingCompletedDate", DateConverter, true)
   processingCompletedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("processingNote", String, true)
   processingNote?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ClassificationSettingsOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }