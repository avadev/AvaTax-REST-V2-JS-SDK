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
 * Account Linkage output model
 * @export
 * @class FirmClientLinkageOutputModel
 */
 @JsonObject("FirmClientLinkageOutputModel")
 export class FirmClientLinkageOutputModel {
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("firmAccountId", Number, true)
   firmAccountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("firmAccountName", String, true)
   firmAccountName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("clientAccountId", Number, true)
   clientAccountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("clientAccountName", String, true)
   clientAccountName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Enums.FirmClientLinkageStatus}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("status", Enums.FirmClientLinkageStatusConverter, true)
   status?: Enums.FirmClientLinkageStatus | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("isDeleted", Boolean, true)
   isDeleted?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("firmContactName", String, true)
   firmContactName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   @JsonProperty("firmContactEmail", String, true)
   firmContactEmail?: string | undefined = undefined;
 }