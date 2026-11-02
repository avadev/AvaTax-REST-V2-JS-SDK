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
 * Request model for updating a Permission Category
 * @export
 * @class PermissionCategoryUpdateRequest
 */
 @JsonObject("PermissionCategoryUpdateRequest")
 export class PermissionCategoryUpdateRequest {
    /**
     * @type {string}
     * @memberof PermissionCategoryUpdateRequest
     */
   @JsonProperty("name", String)
   name: string = undefined;
    /**
     * @type {string}
     * @memberof PermissionCategoryUpdateRequest
     */
   @JsonProperty("description", String)
   description: string = undefined;
    /**
     * @type {PermissionCategoryPermissionDto[]}
     * @memberof PermissionCategoryUpdateRequest
     */
   @JsonProperty("permissions", [PermissionCategoryPermissionDto])
   permissions: PermissionCategoryPermissionDto[] = undefined;
 }