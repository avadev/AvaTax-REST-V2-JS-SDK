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
 * Request model for the returns specific nexus fetch API
 * @export
 * @class NexusForReturnsRequestModel
 */
 @JsonObject("NexusForReturnsRequestModel")
 export class NexusForReturnsRequestModel {
    /**
     * @type {string}
     * @memberof NexusForReturnsRequestModel
     */
   @JsonProperty("nexusTaxTypeGroup", String, true)
   nexusTaxTypeGroup?: string | undefined = undefined;
    /**
     * @type {Enums.NexusTypeId}
     * @memberof NexusForReturnsRequestModel
     */
   @JsonProperty("nexusTypeId", Enums.NexusTypeIdConverter, true)
   nexusTypeId?: Enums.NexusTypeId | undefined = undefined;
    /**
     * @type {Enums.LocalNexusTypeId}
     * @memberof NexusForReturnsRequestModel
     */
   @JsonProperty("localNexusTypeId", Enums.LocalNexusTypeIdConverter, true)
   localNexusTypeId?: Enums.LocalNexusTypeId | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusForReturnsRequestModel
     */
   @JsonProperty("showHistorical", Boolean, true)
   showHistorical?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof NexusForReturnsRequestModel
     */
   @JsonProperty("showSSTOnly", Boolean, true)
   showSSTOnly?: boolean | undefined = undefined;
 }