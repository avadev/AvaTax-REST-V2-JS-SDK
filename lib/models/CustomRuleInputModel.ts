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
import { CustomRuleDefinitionInputModel } from "./CustomRuleDefinitionInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Custom Rule customizes AvaTax's default tax calculation to match a company's specific requirements.
It is composed of modular conditions and actions that can adjust an item's taxability, tax base, and tax rate,
modify transaction fields and addresses, allocate or split line items, update location codes, and more.
 * @export
 * @class CustomRuleInputModel
 */
 @JsonObject("CustomRuleInputModel")
 export class CustomRuleInputModel {
    /**
     * @type {number}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {CustomRuleDefinitionInputModel}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("definition", CustomRuleDefinitionInputModel)
   definition: CustomRuleDefinitionInputModel = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("effectiveDate", DateConverter)
   effectiveDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("endDate", DateConverter)
   endDate: Date = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("enabled", Boolean)
   enabled: boolean = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("continueOnError", Boolean)
   continueOnError: boolean = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleInputModel
     */
   @JsonProperty("isDraft", Boolean, true)
   isDraft?: boolean | undefined = undefined;
 }