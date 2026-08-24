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
import { CustomRuleDefinitionOutputModel } from "./CustomRuleDefinitionOutputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Custom Rule customizes AvaTax's default tax calculation to match a company's specific requirements.
It is composed of modular conditions and actions that can adjust an item's taxability, tax base, and tax rate,
modify transaction fields and addresses, allocate or split line items, update location codes, and more.
 * @export
 * @class CustomRuleOutputModel
 */
 @JsonObject("CustomRuleOutputModel")
 export class CustomRuleOutputModel {
    /**
     * @type {number}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {CustomRuleDefinitionOutputModel}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("definition", CustomRuleDefinitionOutputModel, true)
   definition?: CustomRuleDefinitionOutputModel | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("enabled", Boolean, true)
   enabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("continueOnError", Boolean, true)
   continueOnError?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("isDraft", Boolean, true)
   isDraft?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomRuleOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }