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
import { CustomTaxJurisdictionInputModel } from "./CustomTaxJurisdictionInputModel";
import { CustomTaxAdditionalCriteriaInputModel } from "./CustomTaxAdditionalCriteriaInputModel";
import { CustomTaxTaxabilityInputModel } from "./CustomTaxTaxabilityInputModel";
import { CustomTaxRateInputModel } from "./CustomTaxRateInputModel";
import { CustomTaxExemptionsInputModel } from "./CustomTaxExemptionsInputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Custom Tax represents a tax-rate / taxability / exemption package owned by a single
company. It is a type of Custom Rule that exposes a focused, content-oriented shape for
callers who want to manage tax overrides without constructing a Custom Rule by hand.
<br>
Use of the Custom Tax endpoints requires the `AvaCustomContent` subscription.
<br>
This is the input variant used when creating or updating a Custom Tax via the
`CreateCustomTax`, `UpdateCustomTax`, or `ValidateCustomTax` endpoints. Any
fields that are populated only by the system (such as `id`, `companyId`, and the
created/modified audit fields) are excluded from this model and live on
`CustomTaxOutputModel` instead.

 * @export
 * @class CustomTaxInputModel
 */
 @JsonObject("CustomTaxInputModel")
 export class CustomTaxInputModel {
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("country", String)
   country: string = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("taxTypeCode", String)
   taxTypeCode: string = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("taxSubType", String)
   taxSubType: string = undefined;
    /**
     * @type {string[]}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("rateTypeCodes", [String], true)
   rateTypeCodes?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("effectiveDate", DateConverter)
   effectiveDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("endDate", DateConverter)
   endDate: Date = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("enabled", Boolean)
   enabled: boolean = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("continueOnError", Boolean)
   continueOnError: boolean = undefined;
    /**
     * @type {CustomTaxJurisdictionInputModel[]}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("jurisdictions", [CustomTaxJurisdictionInputModel])
   jurisdictions: CustomTaxJurisdictionInputModel[] = undefined;
    /**
     * @type {CustomTaxAdditionalCriteriaInputModel}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("conditions", CustomTaxAdditionalCriteriaInputModel, true)
   conditions?: CustomTaxAdditionalCriteriaInputModel | undefined = undefined;
    /**
     * @type {CustomTaxTaxabilityInputModel[]}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("taxability", [CustomTaxTaxabilityInputModel], true)
   taxability?: CustomTaxTaxabilityInputModel[] | undefined = undefined;
    /**
     * @type {CustomTaxRateInputModel[]}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("rates", [CustomTaxRateInputModel], true)
   rates?: CustomTaxRateInputModel[] | undefined = undefined;
    /**
     * @type {CustomTaxExemptionsInputModel[]}
     * @memberof CustomTaxInputModel
     */
   @JsonProperty("exemptions", [CustomTaxExemptionsInputModel], true)
   exemptions?: CustomTaxExemptionsInputModel[] | undefined = undefined;
 }