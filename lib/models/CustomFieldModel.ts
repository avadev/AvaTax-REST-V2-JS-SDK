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
 * A custom field provides extra information about a customer or certificate.
            
Custom fields are provided to permit you to store additional information about an exemption certificate or customer.  They are available to
support additional use cases beyond that supported directly by Avalara's exemption certificate software.
            
For more information about custom fields, see the [Avalara Help Center article about custom fields](https://help.avalara.com/0021_Avalara_CertCapture/All_About_CertCapture/Edit_or_Remove_Details_about_Customers).
 * @export
 * @class CustomFieldModel
 */
 @JsonObject("CustomFieldModel")
 export class CustomFieldModel {
    /**
     * @type {number}
     * @memberof CustomFieldModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   @JsonProperty("type", String, true)
   type?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   @JsonProperty("possibleValues", String, true)
   possibleValues?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomFieldModel
     */
   @JsonProperty("usesDataEntry", Boolean, true)
   usesDataEntry?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CustomFieldModel
     */
   @JsonProperty("requiredInDataEntry", Boolean, true)
   requiredInDataEntry?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   @JsonProperty("value", String, true)
   value?: string | undefined = undefined;
 }