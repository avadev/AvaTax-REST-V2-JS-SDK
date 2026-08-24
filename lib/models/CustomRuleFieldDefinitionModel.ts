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
import { CustomRuleFieldLevelDefinitionModel } from "./CustomRuleFieldLevelDefinitionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents the a field available in the Custom Rules interface.
 * @export
 * @class CustomRuleFieldDefinitionModel
 */
 @JsonObject("CustomRuleFieldDefinitionModel")
 export class CustomRuleFieldDefinitionModel {
    /**
     * @type {string}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("category", String, true)
   category?: string | undefined = undefined;
    /**
     * @type {CustomRuleFieldLevelDefinitionModel}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("documentLevel", CustomRuleFieldLevelDefinitionModel, true)
   documentLevel?: CustomRuleFieldLevelDefinitionModel | undefined = undefined;
    /**
     * @type {CustomRuleFieldLevelDefinitionModel}
     * @memberof CustomRuleFieldDefinitionModel
     */
   @JsonProperty("lineLevel", CustomRuleFieldLevelDefinitionModel, true)
   lineLevel?: CustomRuleFieldLevelDefinitionModel | undefined = undefined;
 }