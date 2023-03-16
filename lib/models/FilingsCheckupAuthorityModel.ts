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
import { FilingsCheckupSuggestedFormModel } from "./FilingsCheckupSuggestedFormModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Cycle Safe Expiration results.
 * @export
 * @class FilingsCheckupAuthorityModel
 */
 @JsonObject("FilingsCheckupAuthorityModel")
 export class FilingsCheckupAuthorityModel {
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("taxAuthorityId", Number, true)
   taxAuthorityId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("locationCode", String, true)
   locationCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("taxAuthorityName", String, true)
   taxAuthorityName?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("taxAuthorityTypeId", Number, true)
   taxAuthorityTypeId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("jurisdictionId", Number, true)
   jurisdictionId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("tax", Number, true)
   tax?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("taxTypeId", String, true)
   taxTypeId?: string | undefined = undefined;
    /**
     * @type {FilingsCheckupSuggestedFormModel[]}
     * @memberof FilingsCheckupAuthorityModel
     */
   @JsonProperty("suggestedForms", [FilingsCheckupSuggestedFormModel], true)
   suggestedForms?: FilingsCheckupSuggestedFormModel[] | undefined = undefined;
 }