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
import { EcmsDetailTaxCodeModel } from "./EcmsDetailTaxCodeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents an ECMS record, used internally by AvaTax to track information about exemptions.
 * @export
 * @class EcmsDetailModel
 */
 @JsonObject("EcmsDetailModel")
 export class EcmsDetailModel {
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("exemptCertDetailId", Number)
   exemptCertDetailId: number = undefined;
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("exemptCertId", Number)
   exemptCertId: number = undefined;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("stateFips", String)
   stateFips: string = undefined;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("region", String)
   region: string = undefined;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("idNo", String, true)
   idNo?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {Date}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("idType", String, true)
   idType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("isTaxCodeListExclusionList", Number, true)
   isTaxCodeListExclusionList?: number | undefined = undefined;
    /**
     * @type {EcmsDetailTaxCodeModel[]}
     * @memberof EcmsDetailModel
     */
   @JsonProperty("taxCodes", [EcmsDetailTaxCodeModel], true)
   taxCodes?: EcmsDetailTaxCodeModel[] | undefined = undefined;
 }