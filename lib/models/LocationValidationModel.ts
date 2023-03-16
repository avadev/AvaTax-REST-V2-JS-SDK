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
import { LocationQuestionModel } from "./LocationQuestionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Tells you whether this location object has been correctly set up to the local jurisdiction's standards
 * @export
 * @class LocationValidationModel
 */
 @JsonObject("LocationValidationModel")
 export class LocationValidationModel {
    /**
     * @type {boolean}
     * @memberof LocationValidationModel
     */
   @JsonProperty("settingsValidated", Boolean, true)
   settingsValidated?: boolean | undefined = undefined;
    /**
     * @type {LocationQuestionModel[]}
     * @memberof LocationValidationModel
     */
   @JsonProperty("requiredSettings", [LocationQuestionModel], true)
   requiredSettings?: LocationQuestionModel[] | undefined = undefined;
 }