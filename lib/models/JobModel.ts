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
import { ExposureZoneModel } from "./ExposureZoneModel";
import { JobPhaseModel } from "./JobPhaseModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A job associated with a certificate or customer. Used for $include=jobs on certificate/customer
fetch APIs, and as the request/response body for the standalone Jobs CRUD endpoints.
 * @export
 * @class JobModel
 */
 @JsonObject("JobModel")
 export class JobModel {
    /**
     * @type {number}
     * @memberof JobModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobModel
     */
   @JsonProperty("jobNumber", String, true)
   jobNumber?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof JobModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof JobModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {ExposureZoneModel}
     * @memberof JobModel
     */
   @JsonProperty("exposureZone", ExposureZoneModel, true)
   exposureZone?: ExposureZoneModel | undefined = undefined;
    /**
     * @type {JobPhaseModel[]}
     * @memberof JobModel
     */
   @JsonProperty("phases", [JobPhaseModel], true)
   phases?: JobPhaseModel[] | undefined = undefined;
 }