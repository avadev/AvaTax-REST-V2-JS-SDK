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
import { CustomRuleExportUser } from "./CustomRuleExportUser";
import { TaxRuleModel } from "./TaxRuleModel";
import { DynamicRuleInputModel } from "./DynamicRuleInputModel";
import { AdvancedRuleModel } from "./AdvancedRuleModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a create Custom Rules import batch request model. The payload is the Custom Rules
export envelope (tax rules, dynamic rules, and advanced rules) which is stored as JSON in S3
and processed downstream by BatchV2.
 * @export
 * @class CreateCustomRulesBatchRequestModel
 */
 @JsonObject("CreateCustomRulesBatchRequestModel")
 export class CreateCustomRulesBatchRequestModel {
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("kind", String, true)
   kind?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("schemaVersion", String, true)
   schemaVersion?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("exportedAt", DateConverter, true)
   exportedAt?: Date | undefined = undefined;
    /**
     * @type {CustomRuleExportUser}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("exportedBy", CustomRuleExportUser, true)
   exportedBy?: CustomRuleExportUser | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("sourceAccountId", Number, true)
   sourceAccountId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("sourceCompanyId", Number, true)
   sourceCompanyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("filter", String, true)
   filter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("taxRuleFilter", String, true)
   taxRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("advancedRuleFilter", String, true)
   advancedRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("dynamicRuleFilter", String, true)
   dynamicRuleFilter?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("orderBy", String, true)
   orderBy?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("top", Number, true)
   top?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("skip", Number, true)
   skip?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("totalCount", Number, true)
   totalCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("taxRuleCount", Number, true)
   taxRuleCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("dynamicRuleCount", Number, true)
   dynamicRuleCount?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("advancedRuleCount", Number, true)
   advancedRuleCount?: number | undefined = undefined;
    /**
     * @type {TaxRuleModel[]}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("taxRules", [TaxRuleModel], true)
   taxRules?: TaxRuleModel[] | undefined = undefined;
    /**
     * @type {DynamicRuleInputModel[]}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("dynamicRules", [DynamicRuleInputModel], true)
   dynamicRules?: DynamicRuleInputModel[] | undefined = undefined;
    /**
     * @type {AdvancedRuleModel[]}
     * @memberof CreateCustomRulesBatchRequestModel
     */
   @JsonProperty("advancedRules", [AdvancedRuleModel], true)
   advancedRules?: AdvancedRuleModel[] | undefined = undefined;
 }