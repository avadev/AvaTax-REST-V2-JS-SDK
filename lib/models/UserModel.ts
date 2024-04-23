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
 * An account user who is permitted to use AvaTax.
 * @export
 * @class UserModel
 */
 @JsonObject("UserModel")
 export class UserModel {
    /**
     * @type {number}
     * @memberof UserModel
     */
   @JsonProperty("id", Number)
   id: number = undefined;
    /**
     * @type {number}
     * @memberof UserModel
     */
   @JsonProperty("accountId", Number)
   accountId: number = undefined;
    /**
     * @type {number}
     * @memberof UserModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("userName", String)
   userName: string = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("firstName", String)
   firstName: string = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("lastName", String)
   lastName: string = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("email", String)
   email: string = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("postalCode", String, true)
   postalCode?: string | undefined = undefined;
    /**
     * @type {Enums.SecurityRoleId}
     * @memberof UserModel
     */
   @JsonProperty("securityRoleId", Enums.SecurityRoleIdConverter)
   securityRoleId: Enums.SecurityRoleId = undefined;
    /**
     * @type {Enums.PasswordStatusId}
     * @memberof UserModel
     */
   @JsonProperty("passwordStatus", Enums.PasswordStatusIdConverter, true)
   passwordStatus?: Enums.PasswordStatusId | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof UserModel
     */
   @JsonProperty("isActive", Boolean, true)
   isActive?: boolean | undefined = undefined;
    /**
     * @type {Date}
     * @memberof UserModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof UserModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("subjectId", String, true)
   subjectId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof UserModel
     */
   @JsonProperty("migratedDate", String, true)
   migratedDate?: string | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof UserModel
     */
   @JsonProperty("suppressNewUserEmail", Boolean, true)
   suppressNewUserEmail?: boolean | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof UserModel
     */
   @JsonProperty("isDeleted", Boolean, true)
   isDeleted?: boolean | undefined = undefined;
 }