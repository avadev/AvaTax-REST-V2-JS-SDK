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
 * Request body for creating company classification settings (`POST /classification-settings`).
 * @export
 * @class ClassificationSettingsInputModel
 */
 @JsonObject("ClassificationSettingsInputModel")
 export class ClassificationSettingsInputModel {
    /**
     * @type {string}
     * @memberof ClassificationSettingsInputModel
     */
   @JsonProperty("mode", String, true)
   mode?: string | undefined = undefined;
    /**
     * @type {ClassificationCriteriaModel}
     * @memberof ClassificationSettingsInputModel
     */
   @JsonProperty("criteria", ClassificationCriteriaModel, true)
   criteria?: ClassificationCriteriaModel | undefined = undefined;
    /**
     * @type {CountryScopeModel}
     * @memberof ClassificationSettingsInputModel
     */
   @JsonProperty("countryScope", CountryScopeModel, true)
   countryScope?: CountryScopeModel | undefined = undefined;
 }