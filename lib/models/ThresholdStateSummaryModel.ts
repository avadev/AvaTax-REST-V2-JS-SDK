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
 * Economic nexus threshold status for a single US state.
 * @export
 * @class ThresholdStateSummaryModel
 */
 @JsonObject("ThresholdStateSummaryModel")
 export class ThresholdStateSummaryModel {
    /**
     * @type {string}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("state", String, true)
   state?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("stateName", String, true)
   stateName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("thresholdTimeframe", String, true)
   thresholdTimeframe?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("thresholdStartDate", DateConverter, true)
   thresholdStartDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("thresholdEndDate", DateConverter, true)
   thresholdEndDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("triggerType", String, true)
   triggerType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("transactionThreshold", Number, true)
   transactionThreshold?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("salesThreshold", Number, true)
   salesThreshold?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("totalSalesAmount", Number, true)
   totalSalesAmount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("totalTransactions", Number, true)
   totalTransactions?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ThresholdStateSummaryModel
     */
   @JsonProperty("sourceLastUpdatedAt", DateConverter, true)
   sourceLastUpdatedAt?: Date | undefined = undefined;
 }