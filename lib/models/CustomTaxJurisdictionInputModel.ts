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
This is the input variant used when creating or updating a custom tax. Each jurisdiction
identifies a region of applicability for the parent custom tax.

 * @export
 * @class CustomTaxJurisdictionInputModel
 */
 @JsonObject("CustomTaxJurisdictionInputModel")
 export class CustomTaxJurisdictionInputModel {
    /**
     * @type {Enums.JurisdictionType}
     * @memberof CustomTaxJurisdictionInputModel
     */
   @JsonProperty("jurisdictionTypeId", Enums.JurisdictionTypeConverter)
   jurisdictionTypeId: Enums.JurisdictionType = undefined;
    /**
     * @type {string}
     * @memberof CustomTaxJurisdictionInputModel
     */
   @JsonProperty("jurisCode", String)
   jurisCode: string = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxJurisdictionInputModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CustomTaxJurisdictionInputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }