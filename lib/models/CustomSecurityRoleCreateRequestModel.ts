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
import { CustomSecurityRolePermissionModel } from "./CustomSecurityRolePermissionModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Request model for creating a custom security role
 * @export
 * @class CustomSecurityRoleCreateRequestModel
 */
 @JsonObject("CustomSecurityRoleCreateRequestModel")
 export class CustomSecurityRoleCreateRequestModel {
    /**
     * @type {string}
     * @memberof CustomSecurityRoleCreateRequestModel
     */
   @JsonProperty("accountId", String)
   accountId: string = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleCreateRequestModel
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleCreateRequestModel
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {CustomSecurityRolePermissionModel[]}
     * @memberof CustomSecurityRoleCreateRequestModel
     */
   @JsonProperty("permissions", [CustomSecurityRolePermissionModel])
   permissions: CustomSecurityRolePermissionModel[] = undefined;
 }