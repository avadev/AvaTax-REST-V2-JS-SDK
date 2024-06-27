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
 * Update history for Avalara.AvaTax.AccountServices.Models.v2.CustomerModel and Avalara.AvaTax.AccountServices.Models.v2.CertificateModel. Exposed in url $includes
 * @export
 * @class HistoryModel
 */
 @JsonObject("HistoryModel")
 export class HistoryModel {
    /**
     * @type {number}
     * @memberof HistoryModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof HistoryModel
     */
   @JsonProperty("account", String, true)
   account?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HistoryModel
     */
   @JsonProperty("field", String, true)
   field?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HistoryModel
     */
   @JsonProperty("oldValue", String, true)
   oldValue?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof HistoryModel
     */
   @JsonProperty("newValue", String, true)
   newValue?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof HistoryModel
     */
   @JsonProperty("created", DateConverter, true)
   created?: Date | undefined = undefined;
 }