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
import { CustomTaxJurisdictionOutputModel } from "./CustomTaxJurisdictionOutputModel";
import { CustomTaxAdditionalCriteriaOutputModel } from "./CustomTaxAdditionalCriteriaOutputModel";
import { CustomTaxTaxabilityOutputModel } from "./CustomTaxTaxabilityOutputModel";
import { CustomTaxRateOutputModel } from "./CustomTaxRateOutputModel";
import { CustomTaxExemptionsOutputModel } from "./CustomTaxExemptionsOutputModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * A Custom Tax represents a tax-rate / taxability / exemption package owned by a single
company. It is a type of Custom Rule that exposes a focused, content-oriented shape for
callers who want to manage tax overrides without constructing a Custom Rule by hand.
<br>
Use of the Custom Tax endpoints requires the `AvaCustomContent` subscription.
<br>
This is the output variant returned by `GetCustomTax`, `ListCustomTaxes`, and
write endpoints that echo the persisted record. It includes system-populated fields such
as `id`, `companyId`, and the created/modified audit fields which are not
accepted on input.

 * @export
 * @class CustomTaxOutputModel
 */
 @JsonObject("CustomTaxOutputModel")
 export class CustomTaxOutputModel {
    /**
     * @type {number}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("taxTypeCode", String, true)
   taxTypeCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("taxSubType", String, true)
   taxSubType?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("rateTypeCodes", [String], true)
   rateTypeCodes?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("unitOfBasis", String, true)
   unitOfBasis?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("enabled", Boolean, true)
   enabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("continueOnError", Boolean, true)
   continueOnError?: boolean | undefined = undefined;
    /**
     * @type {CustomTaxJurisdictionOutputModel[]}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("jurisdictions", [CustomTaxJurisdictionOutputModel], true)
   jurisdictions?: CustomTaxJurisdictionOutputModel[] | undefined = undefined;
    /**
     * @type {CustomTaxAdditionalCriteriaOutputModel}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("conditions", CustomTaxAdditionalCriteriaOutputModel, true)
   conditions?: CustomTaxAdditionalCriteriaOutputModel | undefined = undefined;
    /**
     * @type {CustomTaxTaxabilityOutputModel[]}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("taxability", [CustomTaxTaxabilityOutputModel], true)
   taxability?: CustomTaxTaxabilityOutputModel[] | undefined = undefined;
    /**
     * @type {CustomTaxRateOutputModel[]}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("rates", [CustomTaxRateOutputModel], true)
   rates?: CustomTaxRateOutputModel[] | undefined = undefined;
    /**
     * @type {CustomTaxExemptionsOutputModel[]}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("exemptions", [CustomTaxExemptionsOutputModel], true)
   exemptions?: CustomTaxExemptionsOutputModel[] | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof CustomTaxOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }