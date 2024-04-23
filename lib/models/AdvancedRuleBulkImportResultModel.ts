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
import { AdvancedRuleImportResultModel } from "./AdvancedRuleImportResultModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Output model for the Advanced Rules bulk import API
 * @export
 * @class AdvancedRuleBulkImportResultModel
 */
 @JsonObject("AdvancedRuleBulkImportResultModel")
 export class AdvancedRuleBulkImportResultModel {
    /**
     * @type {Enums.BulkImportStatus}
     * @memberof AdvancedRuleBulkImportResultModel
     */
   @JsonProperty("importResult", Enums.BulkImportStatusConverter, true)
   importResult?: Enums.BulkImportStatus | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleBulkImportResultModel
     */
   @JsonProperty("importMessage", String, true)
   importMessage?: string | undefined = undefined;
    /**
     * @type {AdvancedRuleImportResultModel[]}
     * @memberof AdvancedRuleBulkImportResultModel
     */
   @JsonProperty("executions", [AdvancedRuleImportResultModel], true)
   executions?: AdvancedRuleImportResultModel[] | undefined = undefined;
 }