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
 * Represents a permission within a custom security role response (matches OpenAPI spec)
 * @export
 * @class CustomSecurityRolePermissionDto
 */
 @JsonObject("CustomSecurityRolePermissionDto")
 export class CustomSecurityRolePermissionDto {
    /**
     * @type {string}
     * @memberof CustomSecurityRolePermissionDto
     */
   @JsonProperty("permissionId", String, true)
   permissionId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRolePermissionDto
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CustomSecurityRolePermissionDto
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
 }