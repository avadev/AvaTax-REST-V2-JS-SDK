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
 * Represents an ISO 3166 recognized country
 * @export
 * @class IsoCountryModel
 */
 @JsonObject("IsoCountryModel")
 export class IsoCountryModel {
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   @JsonProperty("code", String, true)
   code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   @JsonProperty("alpha3Code", String, true)
   alpha3Code?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof IsoCountryModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof IsoCountryModel
     */
   @JsonProperty("isEuropeanUnion", Boolean, true)
   isEuropeanUnion?: boolean | undefined = undefined;
    /**
     * @type {IsoLocalizedName[]}
     * @memberof IsoCountryModel
     */
   @JsonProperty("localizedNames", [IsoLocalizedName], true)
   localizedNames?: IsoLocalizedName[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof IsoCountryModel
     */
   @JsonProperty("addressesRequireRegion", Boolean, true)
   addressesRequireRegion?: boolean | undefined = undefined;
 }