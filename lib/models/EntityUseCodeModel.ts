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
 * Represents a code describing the intended use for a product that may affect its taxability
 * @export
 * @class EntityUseCodeModel
 */
 @JsonObject("EntityUseCodeModel")
 export class EntityUseCodeModel {
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof EntityUseCodeModel
     */
   @JsonProperty("validCountries", [String], true)
   validCountries?: string[] | undefined = undefined;
 }