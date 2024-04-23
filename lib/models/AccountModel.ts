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
import { SubscriptionModel } from "./SubscriptionModel";
import { UserModel } from "./UserModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * An AvaTax account.
 * @export
 * @class AccountModel
 */
 @JsonObject("AccountModel")
 export class AccountModel {
    /**
     * @type {number}
     * @memberof AccountModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {string}
     * @memberof AccountModel
     */
   @JsonProperty("crmid", String, true)
   crmid?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof AccountModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   @JsonProperty("effectiveDate", DateConverter, true)
   effectiveDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {Enums.AccountStatusId}
     * @memberof AccountModel
     */
   @JsonProperty("accountStatusId", Enums.AccountStatusIdConverter, true)
   accountStatusId?: Enums.AccountStatusId | undefined = undefined;
    /**
     * @type {Enums.AccountTypeId}
     * @memberof AccountModel
     */
   @JsonProperty("accountTypeId", Enums.AccountTypeIdConverter, true)
   accountTypeId?: Enums.AccountTypeId | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountModel
     */
   @JsonProperty("createdUserId", Number, true)
   createdUserId?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof AccountModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {number}
     * @memberof AccountModel
     */
   @JsonProperty("modifiedUserId", Number, true)
   modifiedUserId?: number | undefined = undefined;
    /**
     * @type {SubscriptionModel[]}
     * @memberof AccountModel
     */
   @JsonProperty("subscriptions", [SubscriptionModel], true)
   subscriptions?: SubscriptionModel[] | undefined = undefined;
    /**
     * @type {UserModel[]}
     * @memberof AccountModel
     */
   @JsonProperty("users", [UserModel], true)
   users?: UserModel[] | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AccountModel
     */
   @JsonProperty("isSamlEnabled", Boolean, true)
   isSamlEnabled?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof AccountModel
     */
   @JsonProperty("isDeleted", Boolean, true)
   isDeleted?: boolean | undefined = undefined;
 }