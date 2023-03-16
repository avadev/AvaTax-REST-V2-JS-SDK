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
import { IsoLocalizedName } from "./IsoLocalizedName";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a region, province, or state within a country
 * @export
 * @class IsoRegionModel
 */
 @JsonObject("IsoRegionModel")
 export class IsoRegionModel {
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   @JsonProperty("countryCode", String, true)
   countryCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoRegionModel
     */
   @JsonProperty("classification", String, true)
   classification?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof IsoRegionModel
     */
   @JsonProperty("streamlinedSalesTax", Boolean, true)
   streamlinedSalesTax?: boolean | undefined = undefined;
    /**
     * @type {IsoLocalizedName[]}
     * @memberof IsoRegionModel
     */
   @JsonProperty("localizedNames", [IsoLocalizedName], true)
   localizedNames?: IsoLocalizedName[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof IsoRegionModel
     */
   @JsonProperty("isRegionTaxable", Boolean, true)
   isRegionTaxable?: boolean | undefined = undefined;
 }