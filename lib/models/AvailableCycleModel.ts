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
 * Available Cycle object
 * @export
 * @class AvailableCycleModel
 */
 @JsonObject("AvailableCycleModel")
 export class AvailableCycleModel {
    /**
     * @type {Date}
     * @memberof AvailableCycleModel
     */
   @JsonProperty("transactionalPeriodStart", DateConverter, true)
   transactionalPeriodStart?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AvailableCycleModel
     */
   @JsonProperty("transactionalPeriodEnd", DateConverter, true)
   transactionalPeriodEnd?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AvailableCycleModel
     */
   @JsonProperty("filingDueDate", DateConverter, true)
   filingDueDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof AvailableCycleModel
     */
   @JsonProperty("cycleName", String, true)
   cycleName?: string | undefined = undefined;
 }