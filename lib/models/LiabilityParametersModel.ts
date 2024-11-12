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
 * The model for liability parameters definitions
 * @export
 * @class LiabilityParametersModel
 */
 @JsonObject("LiabilityParametersModel")
 export class LiabilityParametersModel {
    /**
     * @type {Enums.ReturnsLiabilityType}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("liabilityType", Enums.ReturnsLiabilityTypeConverter, true)
   liabilityType?: Enums.ReturnsLiabilityType | undefined = undefined;
    /**
     * @type {Enums.ReturnsReportType}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("returnsReportType", Enums.ReturnsReportTypeConverter, true)
   returnsReportType?: Enums.ReturnsReportType | undefined = undefined;
    /**
     * @type {number}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("hospitalityAccountId", Number, true)
   hospitalityAccountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("year", Number, true)
   year?: number | undefined = undefined;
    /**
     * @type {object}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("month", Object, true)
   month?: object | undefined = undefined;
    /**
     * @type {string}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof LiabilityParametersModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
 }