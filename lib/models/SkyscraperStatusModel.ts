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
import { RequiredFilingCalendarDataFieldModel } from "./RequiredFilingCalendarDataFieldModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a list of statuses of returns available in skyscraper
 * @export
 * @class SkyscraperStatusModel
 */
 @JsonObject("SkyscraperStatusModel")
 export class SkyscraperStatusModel {
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string[]}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("taxFormCodes", [String], true)
   taxFormCodes?: string[] | undefined = undefined;
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
    /**
     * @type {Enums.ScraperType}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("scraperType", Enums.ScraperTypeConverter, true)
   scraperType?: Enums.ScraperType | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("isAvailable", Boolean, true)
   isAvailable?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("expectedResponseTime", String, true)
   expectedResponseTime?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("message", String, true)
   message?: string | undefined = undefined;
    /**
     * @type {requiredFilingCalendarDataFieldModel[]}
     * @memberof SkyscraperStatusModel
     */
   @JsonProperty("requiredFilingCalendarDataFields", [RequiredFilingCalendarDataFieldModel], true)
   requiredFilingCalendarDataFields?: RequiredFilingCalendarDataFieldModel[] | undefined = undefined;
 }