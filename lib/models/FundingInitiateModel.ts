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
 * 
 * @export
 * @class FundingInitiateModel
 */
 @JsonObject("FundingInitiateModel")
 export class FundingInitiateModel {
    /**
     * @type {boolean}
     * @memberof FundingInitiateModel
     */
   @JsonProperty("requestEmail", Boolean, true)
   requestEmail?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingInitiateModel
     */
   @JsonProperty("fundingEmailRecipient", String)
   fundingEmailRecipient: string = undefined;
    /**
     * @type {boolean}
     * @memberof FundingInitiateModel
     */
   @JsonProperty("requestWidget", Boolean, true)
   requestWidget?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingInitiateModel
     */
   @JsonProperty("currency", String, true)
   currency?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof FundingInitiateModel
     */
   @JsonProperty("agreementType", String, true)
   agreementType?: string | undefined = undefined;
 }