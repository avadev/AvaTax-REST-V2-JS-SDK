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
import { DeclareNexusByAddressModel } from "./DeclareNexusByAddressModel";
import { NexusModel } from "./NexusModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Contains information about nexus jurisdictions that were declared
as a result of a call to `DeclareNexusByAddress`.  For each address,
this object model contains a list of the nexus objects that were declared
according to the geocoding that corresponds to this address.
 * @export
 * @class NexusByAddressModel
 */
 @JsonObject("NexusByAddressModel")
 export class NexusByAddressModel {
    /**
     * @type {DeclareNexusByAddressModel}
     * @memberof NexusByAddressModel
     */
   @JsonProperty("address", DeclareNexusByAddressModel, true)
   address?: DeclareNexusByAddressModel | undefined = undefined;
    /**
     * @type {NexusModel[]}
     * @memberof NexusByAddressModel
     */
   @JsonProperty("declaredNexus", [NexusModel], true)
   declaredNexus?: NexusModel[] | undefined = undefined;
 }