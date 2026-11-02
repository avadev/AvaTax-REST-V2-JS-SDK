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
import { CustomSecurityRolePermissionDto } from "./CustomSecurityRolePermissionDto";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Response DTO for Custom Security Role that includes associated permissions
This is used for API responses that need the full custom security role with its permissions
 * @export
 * @class CustomSecurityRoleResponseDto
 */
 @JsonObject("CustomSecurityRoleResponseDto")
 export class CustomSecurityRoleResponseDto {
    /**
     * @type {string}
     * @memberof CustomSecurityRoleResponseDto
     */
   @JsonProperty("customSecurityRoleId", String, true)
   customSecurityRoleId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleResponseDto
     */
   @JsonProperty("accountId", String, true)
   accountId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleResponseDto
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleResponseDto
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {CustomSecurityRolePermissionDto[]}
     * @memberof CustomSecurityRoleResponseDto
     */
   @JsonProperty("permissions", [CustomSecurityRolePermissionDto], true)
   permissions?: CustomSecurityRolePermissionDto[] | undefined = undefined;
 }