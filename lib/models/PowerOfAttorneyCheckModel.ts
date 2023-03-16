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
import { ResourceFileDownloadResult } from "./ResourceFileDownloadResult";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Response when checking if a company has a POA on file with Avalara
 * @export
 * @class PowerOfAttorneyCheckModel
 */
 @JsonObject("PowerOfAttorneyCheckModel")
 export class PowerOfAttorneyCheckModel {
    /**
     * @type {number}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("activePoa", Boolean, true)
   activePoa?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("expirationDate", DateConverter, true)
   expirationDate?: Date | undefined = undefined;
    /**
     * @type {ResourceFileDownloadResult}
     * @memberof PowerOfAttorneyCheckModel
     */
   @JsonProperty("availablePoa", ResourceFileDownloadResult, true)
   availablePoa?: ResourceFileDownloadResult | undefined = undefined;
 }