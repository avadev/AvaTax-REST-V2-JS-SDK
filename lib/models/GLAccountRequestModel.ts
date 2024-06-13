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
import { Int64TaxProfileObjectReferenceModel } from "./Int64TaxProfileObjectReferenceModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * GL account request model
 * @export
 * @class GLAccountRequestModel
 */
 @JsonObject("GLAccountRequestModel")
 export class GLAccountRequestModel {
    /**
     * @type {string}
     * @memberof GLAccountRequestModel
     */
   @JsonProperty("entityUseCode", String, true)
   entityUseCode?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof GLAccountRequestModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof GLAccountRequestModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Int64TaxProfileObjectReferenceModel}
     * @memberof GLAccountRequestModel
     */
   @JsonProperty("defaultItem", Int64TaxProfileObjectReferenceModel, true)
   defaultItem?: Int64TaxProfileObjectReferenceModel | undefined = undefined;
    /**
     * @type {string}
     * @memberof GLAccountRequestModel
     */
   @JsonProperty("glAccountCode", String)
   glAccountCode: string = undefined;
 }