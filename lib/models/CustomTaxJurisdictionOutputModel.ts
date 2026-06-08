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
 * Describes a single jurisdiction in which a custom tax is applicable.
<br>
This is the output variant returned by Custom Tax read endpoints. Each jurisdiction
identifies a region of applicability for the parent custom tax.

 * @export
 * @class CustomTaxJurisdictionOutputModel
 */
 @JsonObject("CustomTaxJurisdictionOutputModel")
 export class CustomTaxJurisdictionOutputModel {
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxJurisdictionOutputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter, true)
   jurisdictionTypeId?: Enums.JurisdictionType | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxJurisdictionOutputModel
     */
   @JsonProperty("jurisCode", String, true)
   jurisCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxJurisdictionOutputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxJurisdictionOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }