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
 * Represents the definition and schema of a Dynamic Rule component.
 * @export
 * @class DynamicRuleComponentDefinitionModel
 */
 @JsonObject("DynamicRuleComponentDefinitionModel")
 export class DynamicRuleComponentDefinitionModel {
    /**
     * @type {Enums.DynamicRuleComponentType}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("type", Enums.DynamicRuleComponentTypeConverter, true)
   type?: Enums.DynamicRuleComponentType | undefined = undefined;
    /**
     * @type {Enums.DynamicRuleComponentSubtype}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("subtype", Enums.DynamicRuleComponentSubtypeConverter, true)
   subtype?: Enums.DynamicRuleComponentSubtype | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("dataSchema", String, true)
   dataSchema?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("validSteps", [String], true)
   validSteps?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DynamicRuleComponentDefinitionModel
     */
   @JsonProperty("requires", [String], true)
   requires?: string[] | undefined = undefined;
 }