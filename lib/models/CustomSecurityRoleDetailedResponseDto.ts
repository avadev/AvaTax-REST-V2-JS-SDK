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
 * Detailed response DTO for Custom Security Role that includes full permission details
This matches CustomSecurityRoleDetailedResponse from OpenAPI spec
 * @export
 * @class CustomSecurityRoleDetailedResponseDto
 */
 @JsonObject("CustomSecurityRoleDetailedResponseDto")
 export class CustomSecurityRoleDetailedResponseDto {
    /**
     * @type {string}
     * @memberof CustomSecurityRoleDetailedResponseDto
     */
   @JsonProperty("customSecurityRoleId", String, true)
   customSecurityRoleId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleDetailedResponseDto
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleDetailedResponseDto
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRoleDetailedResponseDto
     */
   @JsonProperty("accountId", String, true)
   accountId?: string | undefined = undefined;
    /**
     * @type {CustomSecurityRolePermissionDto[]}
     * @memberof CustomSecurityRoleDetailedResponseDto
     */
   @JsonProperty("permissions", [CustomSecurityRolePermissionDto], true)
   permissions?: CustomSecurityRolePermissionDto[] | undefined = undefined;
 }