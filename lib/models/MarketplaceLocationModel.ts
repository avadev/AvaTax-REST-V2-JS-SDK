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
 * Marketplace Location Output model
 * @export
 * @class MarketplaceLocationModel
 */
 @JsonObject("MarketplaceLocationModel")
 export class MarketplaceLocationModel {
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("marketplaceId", String, true)
   marketplaceId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("marketplace", String, true)
   marketplace?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("marketplaceAdoptionDate", DateConverter, true)
   marketplaceAdoptionDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("marketplaceEndDate", DateConverter, true)
   marketplaceEndDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("legislativeEffectiveDate", DateConverter, true)
   legislativeEffectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("enforcementDate", DateConverter, true)
   enforcementDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }