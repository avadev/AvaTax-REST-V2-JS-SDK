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
 * Security Role Assignment Create Request. Assigns exactly one custom security role to one
user for their company - a single object, not an array, since a user is tied to a single
company. To assign multiple roles to a user, call the endpoint once per role.
 * @export
 * @class SecurityRoleAssignmentCreateRequest
 */
 @JsonObject("SecurityRoleAssignmentCreateRequest")
 export class SecurityRoleAssignmentCreateRequest {
    /**
     * @type {string}
     * @memberof SecurityRoleAssignmentCreateRequest
     */
   @JsonProperty("userId", String)
   userId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignmentCreateRequest
     */
   @JsonProperty("securityRoleId", String)
   securityRoleId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignmentCreateRequest
     */
   @JsonProperty("accountId", String)
   accountId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignmentCreateRequest
     */
   @JsonProperty("companyId", String, true)
   companyId?: string | undefined = undefined;
 }