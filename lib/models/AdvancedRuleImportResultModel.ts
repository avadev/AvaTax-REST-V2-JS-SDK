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
 * Model for the results of importing a single rule execution with the Advanced Rules bulk import API
 * @export
 * @class AdvancedRuleImportResultModel
 */
 @JsonObject("AdvancedRuleImportResultModel")
 export class AdvancedRuleImportResultModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleImportResultModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {Enums.BulkImportStatus}
     * @memberof AdvancedRuleImportResultModel
     */
   @JsonProperty("importResult", Enums.BulkImportStatusConverter, true)
   importResult?: Enums.BulkImportStatus | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleImportResultModel
     */
   @JsonProperty("importDetails", String, true)
   importDetails?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleImportResultModel
     */
   @JsonProperty("ruleExecutionId", String, true)
   ruleExecutionId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleImportResultModel
     */
   @JsonProperty("ruleId", String, true)
   ruleId?: string | undefined = undefined;
 }