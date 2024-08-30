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
import { CommunicationLocationResponse } from "./CommunicationLocationResponse";
import { CommunicationExemptionDesignatorResponse } from "./CommunicationExemptionDesignatorResponse";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Encloses communication tax type details
 * @export
 * @class CommunicationTaxTypeResponse
 */
 @JsonObject("CommunicationTaxTypeResponse")
 export class CommunicationTaxTypeResponse {
    /**
     * @type {CommunicationLocationResponse}
     * @memberof CommunicationTaxTypeResponse
     */
   @JsonProperty("location", CommunicationLocationResponse, true)
   location?: CommunicationLocationResponse | undefined = undefined;
    /**
     * @type {CommunicationExemptionDesignatorResponse}
     * @memberof CommunicationTaxTypeResponse
     */
   @JsonProperty("exemptionDesignator", CommunicationExemptionDesignatorResponse, true)
   exemptionDesignator?: CommunicationExemptionDesignatorResponse | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CommunicationTaxTypeResponse
     */
   @JsonProperty("scope", [String], true)
   scope?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof CommunicationTaxTypeResponse
     */
   @JsonProperty("domain", String, true)
   domain?: string | undefined = undefined;
 }