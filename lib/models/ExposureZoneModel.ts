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
 * Information about a physical area or zone in which a certificate can apply.
An exposure zone for an exemption certificate will generally be a tax authority such
as a state, country, or local government entity.
 * @export
 * @class ExposureZoneModel
 */
 @JsonObject("ExposureZoneModel")
 export class ExposureZoneModel {
    /**
     * @type {number}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("tag", String, true)
   tag?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("created", DateConverter, true)
   created?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("modified", DateConverter, true)
   modified?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("region", String, true)
   region?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   @JsonProperty("country", String, true)
   country?: string | undefined = undefined;
 }