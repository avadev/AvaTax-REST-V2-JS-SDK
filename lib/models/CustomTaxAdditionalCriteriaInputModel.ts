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
import { DynamicRuleComponentInputModel } from "./DynamicRuleComponentInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Optional additional criteria for when a custom tax should apply. This model is
structurally identical to `DynamicRuleDefinitionInputModel` but is kept as a distinct
type so that the custom tax surface can evolve independently of the underlying dynamic
rule definition. The nodes defined here are prepended to the main custom tax node when
the custom tax is translated into a dynamic rule at persistence time.
<br>
This is the input variant used when creating or updating a custom tax.

 * @export
 * @class CustomTaxAdditionalCriteriaInputModel
 */
 @JsonObject("CustomTaxAdditionalCriteriaInputModel")
 export class CustomTaxAdditionalCriteriaInputModel {
    /**
     * @type {DynamicRuleComponentInputModel[]}
     * @memberof CustomTaxAdditionalCriteriaInputModel
     */
   @JsonProperty("variables", [DynamicRuleComponentInputModel], true)
   variables?: DynamicRuleComponentInputModel[] | undefined = undefined;
    /**
     * @type {DynamicRuleComponentInputModel[]}
     * @memberof CustomTaxAdditionalCriteriaInputModel
     */
   @JsonProperty("nodes", [DynamicRuleComponentInputModel], true)
   nodes?: DynamicRuleComponentInputModel[] | undefined = undefined;
 }