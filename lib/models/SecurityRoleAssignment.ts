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
 * Security Role Assignment Response Model
 * @export
 * @class SecurityRoleAssignment
 */
 @JsonObject("SecurityRoleAssignment")
 export class SecurityRoleAssignment {
    /**
     * @type {string}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("userRoleMatrixId", String)
   userRoleMatrixId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("userId", String)
   userId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("securityRoleId", String)
   securityRoleId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("accountId", String)
   accountId: string = undefined;
    /**
     * @type {string}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("companyId", String, true)
   companyId?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof SecurityRoleAssignment
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
 }