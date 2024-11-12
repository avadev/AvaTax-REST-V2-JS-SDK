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
import { VarianceResponseEntity } from "./VarianceResponseEntity";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * 
 * @export
 * @class VarianceResponseModel
 */
 @JsonObject("VarianceResponseModel")
 export class VarianceResponseModel {
    /**
     * @type {number}
     * @memberof VarianceResponseModel
     */
   @JsonProperty("totalRequest", Number, true)
   totalRequest?: number | undefined = undefined;
    /**
     * @type {VarianceResponseEntity[]}
     * @memberof VarianceResponseModel
     */
   @JsonProperty("variance", [VarianceResponseEntity], true)
   variance?: VarianceResponseEntity[] | undefined = undefined;
 }