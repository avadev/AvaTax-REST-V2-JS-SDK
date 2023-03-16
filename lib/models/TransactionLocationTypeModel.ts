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
 * Information about a location type
 * @export
 * @class TransactionLocationTypeModel
 */
 @JsonObject("TransactionLocationTypeModel")
 export class TransactionLocationTypeModel {
    /**
     * @type {number}
     * @memberof TransactionLocationTypeModel
     */
   @JsonProperty("documentLocationTypeId", Number, true)
   documentLocationTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLocationTypeModel
     */
   @JsonProperty("documentId", Number, true)
   documentId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLocationTypeModel
     */
   @JsonProperty("documentAddressId", Number, true)
   documentAddressId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLocationTypeModel
     */
   @JsonProperty("locationTypeCode", String, true)
   locationTypeCode?: string | undefined = undefined;
 }