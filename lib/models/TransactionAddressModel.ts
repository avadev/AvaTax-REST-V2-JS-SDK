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
import { JurisdictionModel } from "./JurisdictionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * An address used within this transaction.
 * @export
 * @class TransactionAddressModel
 */
 @JsonObject("TransactionAddressModel")
 export class TransactionAddressModel {
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("transactionId", Number, true)
   transactionId?: number | undefined = undefined;
    /**
     * @type {Enums.BoundaryLevel}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("boundaryLevel", Enums.BoundaryLevelConverter, true)
   boundaryLevel?: Enums.BoundaryLevel | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("line1", String, true)
   line1?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("line2", String, true)
   line2?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("line3", String, true)
   line3?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("city", String, true)
   city?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("taxRegionId", Number, true)
   taxRegionId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("latitude", String, true)
   latitude?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("longitude", String, true)
   longitude?: string | undefined = undefined;
    /**
     * @type {JurisdictionModel[]}
     * @memberof TransactionAddressModel
     */
   @JsonProperty("jurisdictions", [JurisdictionModel], true)
   jurisdictions?: JurisdictionModel[] | undefined = undefined;
 }