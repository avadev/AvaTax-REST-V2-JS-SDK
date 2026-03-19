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
 * 
 * @export
 * @class UnitOfBasisModel
 */
 @JsonObject("UnitOfBasisModel")
 export class UnitOfBasisModel {
    /**
     * @type {number}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("unitOfBasisId", Number, true)
   unitOfBasisId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("measurementTypeId", Number, true)
   measurementTypeId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("measurementTypeCode", String, true)
   measurementTypeCode?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("attributesUsed", [String], true)
   attributesUsed?: string[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof UnitOfBasisModel
     */
   @JsonProperty("isFee", Boolean, true)
   isFee?: boolean | undefined = undefined;
 }