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
import { FundingESignMethodReturn } from "./FundingESignMethodReturn";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Status of an Avalara Managed Returns funding configuration for a company
 * @export
 * @class FundingStatusModel
 */
 @JsonObject("FundingStatusModel")
 export class FundingStatusModel {
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   @JsonProperty("requestId", Number, true)
   requestId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   @JsonProperty("subledgerProfileID", Number, true)
   subledgerProfileID?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("companyID", String, true)
   companyID?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("domain", String, true)
   domain?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("recipient", String, true)
   recipient?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("sender", String, true)
   sender?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("documentKey", String, true)
   documentKey?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("documentType", String, true)
   documentType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("documentName", String, true)
   documentName?: string | undefined = undefined;
    /**
     * @type {FundingESignMethodReturn}
     * @memberof FundingStatusModel
     */
   @JsonProperty("methodReturn", FundingESignMethodReturn, true)
   methodReturn?: FundingESignMethodReturn | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   @JsonProperty("errorMessage", String, true)
   errorMessage?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   @JsonProperty("lastPolled", DateConverter, true)
   lastPolled?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   @JsonProperty("lastSigned", DateConverter, true)
   lastSigned?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   @JsonProperty("lastActivated", DateConverter, true)
   lastActivated?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   @JsonProperty("templateRequestId", Number, true)
   templateRequestId?: number | undefined = undefined;
 }