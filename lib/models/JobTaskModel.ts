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
 * A task within a certificate job phase.
 * @export
 * @class JobTaskModel
 */
 @JsonObject("JobTaskModel")
 export class JobTaskModel {
    /**
     * @type {number}
     * @memberof JobTaskModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof JobTaskModel
     */
   @JsonProperty("phaseId", Number, true)
   phaseId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobTaskModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobTaskModel
     */
   @JsonProperty("taskCode", String, true)
   taskCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobTaskModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobTaskModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }