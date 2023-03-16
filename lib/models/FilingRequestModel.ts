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
import { FilingRequestDataModel } from "./FilingRequestDataModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a commitment to file a tax return on a recurring basis.
Only used if you subscribe to Avalara Returns.
 * @export
 * @class FilingRequestModel
 */
 @JsonObject("FilingRequestModel")
 export class FilingRequestModel {
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {Enums.FilingRequestStatus}
     * @memberof FilingRequestModel
     */
   @JsonProperty("filingRequestStatusId", Enums.FilingRequestStatusConverter, true)
   filingRequestStatusId?: Enums.FilingRequestStatus | undefined = undefined;
    /**
     * @type {FilingRequestDataModel}
     * @memberof FilingRequestModel
     */
   @JsonProperty("data", FilingRequestDataModel)
   data: FilingRequestDataModel = undefined;
    /**
     * @type {Date}
     * @memberof FilingRequestModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FilingRequestModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingRequestModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }