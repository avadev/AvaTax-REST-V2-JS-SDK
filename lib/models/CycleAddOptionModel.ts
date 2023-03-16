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
 * Model with options for adding a new filing calendar
 * @export
 * @class CycleAddOptionModel
 */
 @JsonObject("CycleAddOptionModel")
 export class CycleAddOptionModel {
    /**
     * @type {boolean}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("available", Boolean, true)
   available?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("transactionalPeriodStart", DateConverter, true)
   transactionalPeriodStart?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("transactionalPeriodEnd", DateConverter, true)
   transactionalPeriodEnd?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("filingDueDate", DateConverter, true)
   filingDueDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("cycleName", String, true)
   cycleName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("frequencyName", String, true)
   frequencyName?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("filingFrequencyCode", String, true)
   filingFrequencyCode?: string | undefined = undefined;
    /**
     * @type {Enums.FilingFrequencyId}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("filingFrequencyId", Enums.FilingFrequencyIdConverter, true)
   filingFrequencyId?: Enums.FilingFrequencyId | undefined = undefined;
    /**
     * @type {string}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("cycleUnavailableReason", String, true)
   cycleUnavailableReason?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof CycleAddOptionModel
     */
   @JsonProperty("availableLocationCodes", [String], true)
   availableLocationCodes?: string[] | undefined = undefined;
 }