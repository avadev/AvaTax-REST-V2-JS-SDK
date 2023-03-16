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
import { DeterminationFactorModel } from "./DeterminationFactorModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Response model used as output for InspectLine API.
 * @export
 * @class InspectResponseModel
 */
 @JsonObject("InspectResponseModel")
 export class InspectResponseModel {
    /**
     * @type {DeterminationFactorModel[]}
     * @memberof InspectResponseModel
     */
   @JsonProperty("determinationFactors", [DeterminationFactorModel], true)
   determinationFactors?: DeterminationFactorModel[] | undefined = undefined;
 }