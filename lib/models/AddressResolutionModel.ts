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
import { AddressInfo } from "./AddressInfo";
import { ValidatedAddressInfo } from "./ValidatedAddressInfo";
import { CoordinateInfo } from "./CoordinateInfo";
import { TaxAuthorityInfo } from "./TaxAuthorityInfo";
import { AvaTaxMessage } from "./AvaTaxMessage";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Address Resolution Model
 * @export
 * @class AddressResolutionModel
 */
 @JsonObject("AddressResolutionModel")
 export class AddressResolutionModel {
    /**
     * @type {AddressInfo}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("address", AddressInfo, true)
   address?: AddressInfo | undefined = undefined;
    /**
     * @type {ValidatedAddressInfo[]}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("validatedAddresses", [ValidatedAddressInfo], true)
   validatedAddresses?: ValidatedAddressInfo[] | undefined = undefined;
    /**
     * @type {CoordinateInfo}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("coordinates", CoordinateInfo, true)
   coordinates?: CoordinateInfo | undefined = undefined;
    /**
     * @type {Enums.ResolutionQuality}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("resolutionQuality", Enums.ResolutionQualityConverter, true)
   resolutionQuality?: Enums.ResolutionQuality | undefined = undefined;
    /**
     * @type {TaxAuthorityInfo[]}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("taxAuthorities", [TaxAuthorityInfo], true)
   taxAuthorities?: TaxAuthorityInfo[] | undefined = undefined;
    /**
     * @type {AvaTaxMessage[]}
     * @memberof AddressResolutionModel
     */
   @JsonProperty("messages", [AvaTaxMessage], true)
   messages?: AvaTaxMessage[] | undefined = undefined;
 }