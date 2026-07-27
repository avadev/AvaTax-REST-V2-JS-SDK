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
import { JobTaskModel } from "./JobTaskModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A phase within a certificate job.
 * @export
 * @class JobPhaseModel
 */
 @JsonObject("JobPhaseModel")
 export class JobPhaseModel {
    /**
     * @type {number}
     * @memberof JobPhaseModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobPhaseModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof JobPhaseModel
     */
   @JsonProperty("jobId", Number, true)
   jobId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobPhaseModel
     */
   @JsonProperty("phaseCode", String, true)
   phaseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobPhaseModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobPhaseModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {JobTaskModel[]}
     * @memberof JobPhaseModel
     */
   @JsonProperty("tasks", [JobTaskModel], true)
   tasks?: JobTaskModel[] | undefined = undefined;
 }