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
 * Represents a tax code classification request output model
 * @export
 * @class ItemTaxCodeClassificationRequestOutputModel
 */
 @JsonObject("ItemTaxCodeClassificationRequestOutputModel")
 export class ItemTaxCodeClassificationRequestOutputModel {
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("requestId", Number, true)
   requestId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("request", String, true)
   request?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("status", String, true)
   status?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("requestType", String, true)
   requestType?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ItemTaxCodeClassificationRequestOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }