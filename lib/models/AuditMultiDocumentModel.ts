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
import { ReconstructedMultiDocumentModel } from "./ReconstructedMultiDocumentModel";
import { OriginalApiRequestResponseModel } from "./OriginalApiRequestResponseModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about a previously created MultiDocument transaction
 * @export
 * @class AuditMultiDocumentModel
 */
 @JsonObject("AuditMultiDocumentModel")
 export class AuditMultiDocumentModel {
    /**
     * @type {ReconstructedMultiDocumentModel}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("reconstructed", ReconstructedMultiDocumentModel, true)
   reconstructed?: ReconstructedMultiDocumentModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {Enums.DocumentType}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("type", Enums.DocumentTypeConverter, true)
   type?: Enums.DocumentType | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("serverTimestamp", DateConverter, true)
   serverTimestamp?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("serverDuration", DateConverter, true)
   serverDuration?: Date | undefined = undefined;
    /**
     * @type {Enums.ApiCallStatus}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("apiCallStatus", Enums.ApiCallStatusConverter, true)
   apiCallStatus?: Enums.ApiCallStatus | undefined = undefined;
    /**
     * @type {OriginalApiRequestResponseModel}
     * @memberof AuditMultiDocumentModel
     */
   @JsonProperty("original", OriginalApiRequestResponseModel, true)
   original?: OriginalApiRequestResponseModel | undefined = undefined;
 }