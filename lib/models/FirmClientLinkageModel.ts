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
 * @class FirmClientLinkageModel
 */
 @JsonObject("FirmClientLinkageModel")
 export class FirmClientLinkageModel {
    /**
     * @type {number}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("firmAccountId", Number, true)
   firmAccountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("firmAccountName", String, true)
   firmAccountName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("clientAccountId", Number, true)
   clientAccountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("clientAccountName", String, true)
   clientAccountName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {Enums.FirmClientLinkageStatus}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("status", Enums.FirmClientLinkageStatusConverter, true)
   status?: Enums.FirmClientLinkageStatus | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("isDeleted", Boolean, true)
   isDeleted?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("firmContactName", String, true)
   firmContactName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FirmClientLinkageModel
     */
   @JsonProperty("firmContactEmail", String, true)
   firmContactEmail?: string | undefined = undefined;
 }