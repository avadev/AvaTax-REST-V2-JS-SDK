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
 * Represents the definition and schema of a Custom Rule component.
 * @export
 * @class CustomRuleComponentDefinitionModel
 */
 @JsonObject("CustomRuleComponentDefinitionModel")
 export class CustomRuleComponentDefinitionModel {
    /**
     * @type {Enums.CustomRuleComponentType}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("type", Enums.CustomRuleComponentTypeConverter, true)
   type?: Enums.CustomRuleComponentType | undefined = undefined;
    /**
     * @type {Enums.CustomRuleComponentSubtype}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("subtype", Enums.CustomRuleComponentSubtypeConverter, true)
   subtype?: Enums.CustomRuleComponentSubtype | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("dataSchema", String, true)
   dataSchema?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("validSteps", [String], true)
   validSteps?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomRuleComponentDefinitionModel
     */
   @JsonProperty("requires", [String], true)
   requires?: string[] | undefined = undefined;
 }