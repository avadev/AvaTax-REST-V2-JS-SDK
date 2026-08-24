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
import { CustomRuleEnumValueModel } from "./CustomRuleEnumValueModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about a field at a specific "level" (Document or Line).
 * @export
 * @class CustomRuleFieldLevelDefinitionModel
 */
 @JsonObject("CustomRuleFieldLevelDefinitionModel")
 export class CustomRuleFieldLevelDefinitionModel {
    /**
     * @type {string}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("expressionType", String, true)
   expressionType?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("deprecated", Boolean, true)
   deprecated?: boolean | undefined = undefined;
    /**
     * @type {CustomRuleEnumValueModel[]}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("anyOf", [CustomRuleEnumValueModel], true)
   anyOf?: CustomRuleEnumValueModel[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("readSteps", [String], true)
   readSteps?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("readOnly", Boolean, true)
   readOnly?: boolean | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("writeSteps", [String], true)
   writeSteps?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleFieldLevelDefinitionModel
     */
   @JsonProperty("writeOnly", Boolean, true)
   writeOnly?: boolean | undefined = undefined;
 }