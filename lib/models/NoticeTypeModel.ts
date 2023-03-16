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
 * Tax Notice Type Model
 * @export
 * @class NoticeTypeModel
 */
 @JsonObject("NoticeTypeModel")
 export class NoticeTypeModel {
    /**
     * @type {number}
     * @memberof NoticeTypeModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {string}
     * @memberof NoticeTypeModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {boolean}
     * @memberof NoticeTypeModel
     */
   @JsonProperty("activeFlag", Boolean, true)
   activeFlag?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof NoticeTypeModel
     */
   @JsonProperty("sortOrder", Number, true)
   sortOrder?: number | undefined = undefined;
 }