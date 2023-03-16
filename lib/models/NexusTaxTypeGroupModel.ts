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
 * Represents a group of tax types
 * @export
 * @class NexusTaxTypeGroupModel
 */
 @JsonObject("NexusTaxTypeGroupModel")
 export class NexusTaxTypeGroupModel {
    /**
     * @type {number}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("nexusTaxTypeGroupId", String, true)
   nexusTaxTypeGroupId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("subscriptionTypeId", Number, true)
   subscriptionTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("subscriptionDescription", String, true)
   subscriptionDescription?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("tabName", String, true)
   tabName?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusTaxTypeGroupModel
     */
   @JsonProperty("showColumn", Boolean, true)
   showColumn?: boolean | undefined = undefined;
 }