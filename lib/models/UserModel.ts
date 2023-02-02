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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * An account user who is permitted to use AvaTax.
 * @export
 * @interface UserModel
 */
 export interface UserModel {
    /**
     * @type {number}
     * @memberof UserModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof UserModel
     */
   accountId: number;
    /**
     * @type {number}
     * @memberof UserModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof UserModel
     */
   userName: string;
    /**
     * @type {string}
     * @memberof UserModel
     */
   firstName: string;
    /**
     * @type {string}
     * @memberof UserModel
     */
   lastName: string;
    /**
     * @type {string}
     * @memberof UserModel
     */
   email: string;
    /**
     * @type {string}
     * @memberof UserModel
     */
   postalCode?: string;
    /**
     * @type {Enums.SecurityRoleId}
     * @memberof UserModel
     */
   securityRoleId: Enums.SecurityRoleId;
    /**
     * @type {Enums.PasswordStatusId}
     * @memberof UserModel
     */
   passwordStatus?: Enums.PasswordStatusId;
    /**
     * @type {boolean}
     * @memberof UserModel
     */
   isActive?: boolean;
    /**
     * @type {Date}
     * @memberof UserModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof UserModel
     */
   modifiedDate?: Date;
    /**
     * @type {string}
     * @memberof UserModel
     */
   subjectId?: string;
    /**
     * @type {string}
     * @memberof UserModel
     */
   migratedDate?: string;
    /**
     * @type {boolean}
     * @memberof UserModel
     */
   suppressNewUserEmail?: boolean;
 }