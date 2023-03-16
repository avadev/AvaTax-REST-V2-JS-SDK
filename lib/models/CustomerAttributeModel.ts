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
 * A Customer's linked attribute denoting what features applied to the customer. A customer can
be linked to multiple customer attributes and vice versa.
 * @export
 * @class CustomerAttributeModel
 */
 @JsonObject("CustomerAttributeModel")
 export class CustomerAttributeModel {
    /**
     * @type {number}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("isSystemCode", Boolean, true)
   isSystemCode?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("isNonDeliver", Boolean, true)
   isNonDeliver?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomerAttributeModel
     */
   @JsonProperty("isChangeable", Boolean, true)
   isChangeable?: boolean | undefined = undefined;
 }