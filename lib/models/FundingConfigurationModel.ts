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
 * Status of an Avalara Managed Returns funding configuration for a company
 * @export
 * @class FundingConfigurationModel
 */
 @JsonObject("FundingConfigurationModel")
 export class FundingConfigurationModel {
    /**
     * @type {number}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("systemType", String, true)
   systemType?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("currency", String, true)
   currency?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("isFundingSetup", Boolean, true)
   isFundingSetup?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("fundingMethod", String, true)
   fundingMethod?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof FundingConfigurationModel
     */
   @JsonProperty("lastUpdated", DateConverter, true)
   lastUpdated?: Date | undefined = undefined;
 }