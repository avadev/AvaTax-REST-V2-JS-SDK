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
 * An AvaTax account.
 * @export
 * @class AccountMigrationStatusModel
 */
 @JsonObject("AccountMigrationStatusModel")
 export class AccountMigrationStatusModel {
    /**
     * @type {number}
     * @memberof AccountMigrationStatusModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {string}
     * @memberof AccountMigrationStatusModel
     */
   @JsonProperty("accountName", String, true)
   accountName?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountMigrationStatusModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountMigrationStatusModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountMigrationStatusModel
     */
   @JsonProperty("accountMigrationStatusId", Number, true)
   accountMigrationStatusId?: number | undefined = undefined;
 }