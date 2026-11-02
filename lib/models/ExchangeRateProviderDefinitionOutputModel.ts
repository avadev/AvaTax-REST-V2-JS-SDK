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
 * One (provider, frequency) pair that AvaTax offers for exchange rate provider configuration.
<br>
Read this catalogue before writing an `ExchangeRateProviderConfig`: the write contract
carries Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderDefinitionOutputModel.providerCode and Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderDefinitionOutputModel.frequency, and both must name a pair
listed here. The pair also determines the configuration's currency, which is why
Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderDefinitionOutputModel.baseCurrency is returned but never supplied.
<br>
A provider offered at more than one frequency appears as multiple entries sharing the same
Avalara.AvaTax.AccountServices.Models.v2.ExchangeRateProviderDefinitionOutputModel.providerCode (for example SNB Daily and SNB Monthly).

 * @export
 * @class ExchangeRateProviderDefinitionOutputModel
 */
 @JsonObject("ExchangeRateProviderDefinitionOutputModel")
 export class ExchangeRateProviderDefinitionOutputModel {
    /**
     * @type {string}
     * @memberof ExchangeRateProviderDefinitionOutputModel
     */
   @JsonProperty("providerCode", String, true)
   providerCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderDefinitionOutputModel
     */
   @JsonProperty("providerName", String, true)
   providerName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderDefinitionOutputModel
     */
   @JsonProperty("frequency", String, true)
   frequency?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderDefinitionOutputModel
     */
   @JsonProperty("baseCurrency", String, true)
   baseCurrency?: string | undefined = undefined;
 }