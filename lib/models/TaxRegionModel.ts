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
import { DenormalizedJurisModel } from "./DenormalizedJurisModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The tax region model.
 * @export
 * @class TaxRegionModel
 */
 @JsonObject("TaxRegionModel")
 export class TaxRegionModel {
    /**
     * @type {number}
     * @memberof TaxRegionModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("county", String, true)
   county?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("serCode", String, true)
   serCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxRegionModel
     */
   @JsonProperty("signatureCode", String, true)
   signatureCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRegionModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxRegionModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxRegionModel
     */
   @JsonProperty("isAcm", Boolean, true)
   isAcm?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof TaxRegionModel
     */
   @JsonProperty("isSst", Boolean, true)
   isSst?: boolean | undefined = undefined;
    /**
     * @type {DenormalizedJurisModel[]}
     * @memberof TaxRegionModel
     */
   @JsonProperty("jurisdictions", [DenormalizedJurisModel], true)
   jurisdictions?: DenormalizedJurisModel[] | undefined = undefined;
 }