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
 * An exchange rate provider configuration: which ERS provider feed and refresh frequency a
company uses when converting a given currency, optionally narrowed to a country.
<br>`currencyCode` is derived from the resolved provider's base currency. The internal
mapping id is not returned. System-default configurations are read-only over this API.

 * @export
 * @class ExchangeRateProviderConfigOutputModel
 */
 @JsonObject("ExchangeRateProviderConfigOutputModel")
 export class ExchangeRateProviderConfigOutputModel {
    /**
     * @type {number}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("currencyCode", String, true)
   currencyCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("countryCode", String, true)
   countryCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("providerCode", String, true)
   providerCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("frequency", String, true)
   frequency?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("isConfigurable", Boolean, true)
   isConfigurable?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExchangeRateProviderConfigOutputModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }