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
 * Represents a parameter associated with a nexus.
 * @export
 * @class NexusParameterDetailModel
 */
 @JsonObject("NexusParameterDetailModel")
 export class NexusParameterDetailModel {
    /**
     * @type {number}
     * @memberof NexusParameterDetailModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusParameterDetailModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof NexusParameterDetailModel
     */
   @JsonProperty("value", String)
   value: string = undefined;
    /**
     * @type {string}
     * @memberof NexusParameterDetailModel
     */
   @JsonProperty("unit", String, true)
   unit?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusParameterDetailModel
     */
   @JsonProperty("nexusId", Number, true)
   nexusId?: number | undefined = undefined;
 }