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
import { CompanyAddress } from "./CompanyAddress";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a request for a free trial account for AvaTax.
Free trial accounts are only available on the Sandbox environment.
 * @export
 * @class FreeTrialRequestModel
 */
 @JsonObject("FreeTrialRequestModel")
 export class FreeTrialRequestModel {
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("firstName", String)
   firstName: string = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("lastName", String)
   lastName: string = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("email", String)
   email: string = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("company", String)
   company: string = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("phone", String)
   phone: string = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("campaign", String, true)
   campaign?: string | undefined = undefined;
    /**
     * @type {CompanyAddress}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("companyAddress", CompanyAddress)
   companyAddress: CompanyAddress = undefined;
    /**
     * @type {string}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("website", String, true)
   website?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("haveReadAvalaraTermsAndConditions", Boolean)
   haveReadAvalaraTermsAndConditions: boolean = undefined;
    /**
     * @type {boolean}
     * @memberof FreeTrialRequestModel
     */
   @JsonProperty("acceptAvalaraTermsAndConditions", Boolean)
   acceptAvalaraTermsAndConditions: boolean = undefined;
 }