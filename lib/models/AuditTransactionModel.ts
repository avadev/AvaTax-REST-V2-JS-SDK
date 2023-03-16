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
import { ReconstructedApiRequestResponseModel } from "./ReconstructedApiRequestResponseModel";
import { OriginalApiRequestResponseModel } from "./OriginalApiRequestResponseModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about a previously created transaction
 * @export
 * @class AuditTransactionModel
 */
 @JsonObject("AuditTransactionModel")
 export class AuditTransactionModel {
    /**
     * @type {number}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {ReconstructedApiRequestResponseModel}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("reconstructed", ReconstructedApiRequestResponseModel, true)
   reconstructed?: ReconstructedApiRequestResponseModel | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("serverTimestamp", DateConverter, true)
   serverTimestamp?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("serverDuration", DateConverter, true)
   serverDuration?: Date | undefined = undefined;
    /**
     * @type {Enums.ApiCallStatus}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("apiCallStatus", Enums.ApiCallStatusConverter, true)
   apiCallStatus?: Enums.ApiCallStatus | undefined = undefined;
    /**
     * @type {OriginalApiRequestResponseModel}
     * @memberof AuditTransactionModel
     */
   @JsonProperty("original", OriginalApiRequestResponseModel, true)
   original?: OriginalApiRequestResponseModel | undefined = undefined;
 }