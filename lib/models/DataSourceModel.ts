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
 * Data source object
 * @export
 * @class DataSourceModel
 */
 @JsonObject("DataSourceModel")
 export class DataSourceModel {
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   @JsonProperty("source", String)
   source: string = undefined;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   @JsonProperty("instance", String, true)
   instance?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   @JsonProperty("isEnabled", Boolean, true)
   isEnabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   @JsonProperty("isSynced", Boolean, true)
   isSynced?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   @JsonProperty("isAuthorized", Boolean, true)
   isAuthorized?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   @JsonProperty("lastSyncedDate", DateConverter, true)
   lastSyncedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   @JsonProperty("deletedDate", DateConverter, true)
   deletedDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   @JsonProperty("recalculate", Boolean, true)
   recalculate?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   @JsonProperty("externalState", String, true)
   externalState?: string | undefined = undefined;
 }