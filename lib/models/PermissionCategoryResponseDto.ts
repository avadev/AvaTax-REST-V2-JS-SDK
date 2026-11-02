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
import { PermissionCategoryPermissionDto } from "./PermissionCategoryPermissionDto";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Response DTO for Permission Category that includes associated permissions
This is used for API responses that need the full permission category with its permissions
 * @export
 * @class PermissionCategoryResponseDto
 */
 @JsonObject("PermissionCategoryResponseDto")
 export class PermissionCategoryResponseDto {
    /**
     * @type {string}
     * @memberof PermissionCategoryResponseDto
     */
   @JsonProperty("permissionCategoryId", String, true)
   permissionCategoryId?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PermissionCategoryResponseDto
     */
   @JsonProperty("name", String, true)
   name?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof PermissionCategoryResponseDto
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {PermissionCategoryPermissionDto[]}
     * @memberof PermissionCategoryResponseDto
     */
   @JsonProperty("permissions", [PermissionCategoryPermissionDto], true)
   permissions?: PermissionCategoryPermissionDto[] | undefined = undefined;
 }