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
import { RateTypesModel } from "./RateTypesModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * One tax type + subtype combination for a jurisdiction.
 * @export
 * @class JurisdictionTaxTypesAndSubTypesModel
 */
 @JsonObject("JurisdictionTaxTypesAndSubTypesModel")
 export class JurisdictionTaxTypesAndSubTypesModel {
    /**
     * @type {string}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("taxTypeId", String)
   taxTypeId: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("taxTypeDescription", String)
   taxTypeDescription: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("taxSubTypeId", String)
   taxSubTypeId: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("taxSubTypeDescription", String)
   taxSubTypeDescription: string = undefined;
    /**
     * @type {string}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("jurisdictionTaxTypeSubtypeDescription", String)
   jurisdictionTaxTypeSubtypeDescription: string = undefined;
    /**
     * @type {RateTypesModel[]}
     * @memberof JurisdictionTaxTypesAndSubTypesModel
     */
   @JsonProperty("rateTypes", [RateTypesModel], true)
   rateTypes?: RateTypesModel[] | undefined = undefined;
 }