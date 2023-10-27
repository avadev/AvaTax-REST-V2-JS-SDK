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
 * Tax Profile Service Meta data information
 * @export
 * @class TaxProfileMetaDataModel
 */
 @JsonObject("TaxProfileMetaDataModel")
 export class TaxProfileMetaDataModel {
    /**
     * @type {string}
     * @memberof TaxProfileMetaDataModel
     */
   @JsonProperty("createdUser", String, true)
   createdUser?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxProfileMetaDataModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxProfileMetaDataModel
     */
   @JsonProperty("modifiedUser", String, true)
   modifiedUser?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxProfileMetaDataModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }