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
import { DynamicRuleDefinitionOutputModel } from "./DynamicRuleDefinitionOutputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Dynamic Rule is a type of a custom rule which is similar to an Advanced Rule, but
has a graph-based execution flow made up of modular Conditions and Actions that may
be linked to one or more traditional custom Tax Rules.
 * @export
 * @class DynamicRuleOutputModel
 */
 @JsonObject("DynamicRuleOutputModel")
 export class DynamicRuleOutputModel {
    /**
     * @type {number}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {DynamicRuleDefinitionOutputModel}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("definition", DynamicRuleDefinitionOutputModel, true)
   definition?: DynamicRuleDefinitionOutputModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("enabled", Boolean, true)
   enabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("continueOnError", Boolean, true)
   continueOnError?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("isDeleted", Boolean, true)
   isDeleted?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof DynamicRuleOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }