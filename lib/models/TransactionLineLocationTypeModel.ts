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
 * Represents information about location types stored in a line
 * @export
 * @class TransactionLineLocationTypeModel
 */
 @JsonObject("TransactionLineLocationTypeModel")
 export class TransactionLineLocationTypeModel {
    /**
     * @type {number}
     * @memberof TransactionLineLocationTypeModel
     */
   @JsonProperty("documentLineLocationTypeId", Number, true)
   documentLineLocationTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineLocationTypeModel
     */
   @JsonProperty("documentLineId", Number, true)
   documentLineId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionLineLocationTypeModel
     */
   @JsonProperty("documentAddressId", Number, true)
   documentAddressId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionLineLocationTypeModel
     */
   @JsonProperty("locationTypeCode", String, true)
   locationTypeCode?: string | undefined = undefined;
 }