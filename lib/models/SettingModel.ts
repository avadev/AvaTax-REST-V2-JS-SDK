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
 * This object is used to keep track of custom information about a company.
            
The company settings system is a metadata system that you can use to store extra information
about a company.  Your integration or connector could use this data storage to keep track of
preference information, reminders, or any other storage that would need to persist even if
the customer uninstalls your application.
            
A setting can refer to any type of data you need to remember about this company object.
When creating this object, you may define your own `set`, `name`, and `value` parameters.
To define your own values, please choose a `set` name that begins with `X-` to indicate an extension.
 * @export
 * @class SettingModel
 */
 @JsonObject("SettingModel")
 export class SettingModel {
    /**
     * @type {number}
     * @memberof SettingModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof SettingModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   @JsonProperty("set", String)
   set: string = undefined;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof SettingModel
     */
   @JsonProperty("value", String, true)
   value?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof SettingModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof SettingModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
 }