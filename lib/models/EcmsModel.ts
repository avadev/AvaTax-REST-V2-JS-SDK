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
import { EcmsDetailModel } from "./EcmsDetailModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Exempt certificate
 * @export
 * @class EcmsModel
 */
 @JsonObject("EcmsModel")
 export class EcmsModel {
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptCertId", Number)
   exemptCertId: number = undefined;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   @JsonProperty("companyId", Number)
   companyId: number = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("customerCode", String)
   customerCode: string = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("customerName", String, true)
   customerName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("address1", String, true)
   address1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("address2", String, true)
   address2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("address3", String, true)
   address3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {Enums.ExemptCertTypeId}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptCertTypeId", Enums.ExemptCertTypeIdConverter)
   exemptCertTypeId: Enums.ExemptCertTypeId = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("documentRefNo", String, true)
   documentRefNo?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   @JsonProperty("businessTypeId", Number)
   businessTypeId: number = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("businessTypeOtherDescription", String, true)
   businessTypeOtherDescription?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptReasonId", String, true)
   exemptReasonId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptReasonOtherDescription", String, true)
   exemptReasonOtherDescription?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("regionsApplicable", String)
   regionsApplicable: string = undefined;
    /**
     * @type {Enums.ExemptCertStatusId}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptCertStatusId", Enums.ExemptCertStatusIdConverter)
   exemptCertStatusId: Enums.ExemptCertStatusId = undefined;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   @JsonProperty("lastTransactionDate", DateConverter, true)
   lastTransactionDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   @JsonProperty("expiryDate", DateConverter, true)
   expiryDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof EcmsModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof EcmsModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("countryIssued", String)
   countryIssued: string = undefined;
    /**
     * @type {string}
     * @memberof EcmsModel
     */
   @JsonProperty("avaCertId", String, true)
   avaCertId?: string | undefined = undefined;
    /**
     * @type {Enums.ExemptCertReviewStatusId}
     * @memberof EcmsModel
     */
   @JsonProperty("exemptCertReviewStatusId", Enums.ExemptCertReviewStatusIdConverter, true)
   exemptCertReviewStatusId?: Enums.ExemptCertReviewStatusId | undefined = undefined;
    /**
     * @type {EcmsDetailModel[]}
     * @memberof EcmsModel
     */
   @JsonProperty("details", [EcmsDetailModel], true)
   details?: EcmsDetailModel[] | undefined = undefined;
 }