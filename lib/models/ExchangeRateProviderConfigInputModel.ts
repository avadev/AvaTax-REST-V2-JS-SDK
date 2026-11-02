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
 * Input model for creating or updating a company exchange rate provider configuration.
<br>
Name the feed with Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderConfigInputModel.providerCode and Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderConfigInputModel.frequency; both are resolved
server-side against the catalogue from `ListExchangeRateProviderDefinitions`. The
server derives `currencyCode` from that pair. Do not send
`providerFrequencyMappingId`.
<br>
First release: only Switzerland (`CH`) with provider `SNB` may be written, and
frequency is the only customer choice on that slot. System defaults are read-only.
<br>
On create, Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderConfigInputModel.effDate must be today or later (UTC). On update, restate the
immutable fields and change only Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderConfigInputModel.endDate (today or later).

 * @export
 * @class ExchangeRateProviderConfigInputModel
 */
 @JsonObject("ExchangeRateProviderConfigInputModel")
 export class ExchangeRateProviderConfigInputModel {
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigInputModel
     */
   @JsonProperty("countryCode", String)
   countryCode: string = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigInputModel
     */
   @JsonProperty("providerCode", String)
   providerCode: string = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigInputModel
     */
   @JsonProperty("frequency", String)
   frequency: string = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigInputModel
     */
   @JsonProperty("effDate", DateConverter)
   effDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigInputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }