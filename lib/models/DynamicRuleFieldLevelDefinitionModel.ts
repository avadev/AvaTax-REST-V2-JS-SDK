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
import { DynamicRuleEnumValueModel } from "./DynamicRuleEnumValueModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about a field at a specific "level" (Document or Line).
 * @export
 * @class DynamicRuleFieldLevelDefinitionModel
 */
 @JsonObject("DynamicRuleFieldLevelDefinitionModel")
 export class DynamicRuleFieldLevelDefinitionModel {
    /**
     * @type {string}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("expressionType", String, true)
   expressionType?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("deprecated", Boolean, true)
   deprecated?: boolean | undefined = undefined;
    /**
     * @type {DynamicRuleEnumValueModel[]}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("anyOf", [DynamicRuleEnumValueModel], true)
   anyOf?: DynamicRuleEnumValueModel[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("readSteps", [String], true)
   readSteps?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("readOnly", Boolean, true)
   readOnly?: boolean | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("writeSteps", [String], true)
   writeSteps?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DynamicRuleFieldLevelDefinitionModel
     */
   @JsonProperty("writeOnly", Boolean, true)
   writeOnly?: boolean | undefined = undefined;
 }