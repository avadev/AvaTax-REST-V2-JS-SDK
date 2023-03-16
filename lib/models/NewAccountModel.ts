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
 * Represents information about a newly created account
 * @export
 * @class NewAccountModel
 */
 @JsonObject("NewAccountModel")
 export class NewAccountModel {
    /**
     * @type {number}
     * @memberof NewAccountModel
     */
   @JsonProperty("accountId", Number, true)
   accountId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   @JsonProperty("accountDetailsEmailedTo", String, true)
   accountDetailsEmailedTo?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NewAccountModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof NewAccountModel
     */
   @JsonProperty("emailedDate", DateConverter, true)
   emailedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   @JsonProperty("limitations", String, true)
   limitations?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   @JsonProperty("licenseKey", String, true)
   licenseKey?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof NewAccountModel
     */
   @JsonProperty("paymentUrl", String, true)
   paymentUrl?: string | undefined = undefined;
 }