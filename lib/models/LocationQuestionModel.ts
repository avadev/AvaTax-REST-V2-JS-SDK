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
 * Information about questions that the local jurisdictions require for each location
 * @export
 * @class LocationQuestionModel
 */
 @JsonObject("LocationQuestionModel")
 export class LocationQuestionModel {
    /**
     * @type {number}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("question", String)
   question: string = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("regularExpression", String, true)
   regularExpression?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("exampleValue", String, true)
   exampleValue?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("jurisdictionName", String, true)
   jurisdictionName?: string | undefined = undefined;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("jurisdictionType", Enums.JurisdictionTypeConverter, true)
   jurisdictionType?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("jurisdictionCountry", String, true)
   jurisdictionCountry?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("jurisdictionRegion", String, true)
   jurisdictionRegion?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("helpText", String, true)
   helpText?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("maxLength", Number, true)
   maxLength?: number | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("required", Boolean, true)
   required?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("dataType", String, true)
   dataType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("staticOptions", String, true)
   staticOptions?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof LocationQuestionModel
     */
   @JsonProperty("unique", Boolean, true)
   unique?: boolean | undefined = undefined;
 }