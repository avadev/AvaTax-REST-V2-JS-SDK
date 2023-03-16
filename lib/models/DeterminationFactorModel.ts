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
 * This object represents a single determination factor for a line that is being inspected through the InspectLine API.
 * @export
 * @class DeterminationFactorModel
 */
 @JsonObject("DeterminationFactorModel")
 export class DeterminationFactorModel {
    /**
     * @type {string}
     * @memberof DeterminationFactorModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeterminationFactorModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DeterminationFactorModel
     */
   @JsonProperty("ids", [String], true)
   ids?: string[] | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof DeterminationFactorModel
     */
   @JsonProperty("names", [String], true)
   names?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof DeterminationFactorModel
     */
   @JsonProperty("createdBy", String, true)
   createdBy?: string | undefined = undefined;
 }