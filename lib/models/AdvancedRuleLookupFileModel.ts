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
 * Model representing a lookup file for a company
 * @export
 * @class AdvancedRuleLookupFileModel
 */
 @JsonObject("AdvancedRuleLookupFileModel")
 export class AdvancedRuleLookupFileModel {
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("lookupFileId", String, true)
   lookupFileId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("id", String, true)
   id?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("content", String)
   content: string = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("fileExtension", String)
   fileExtension: string = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("isTest", Boolean, true)
   isTest?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("inUse", Boolean, true)
   inUse?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("createdDate", String, true)
   createdDate?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AdvancedRuleLookupFileModel
     */
   @JsonProperty("modifiedDate", String, true)
   modifiedDate?: string | undefined = undefined;
 }