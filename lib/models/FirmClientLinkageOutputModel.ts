/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Account Linkage output model
 * @export
 * @interface FirmClientLinkageOutputModel
 */
 export interface FirmClientLinkageOutputModel {
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   firmAccountId?: number;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   firmAccountName: string;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   clientAccountId?: number;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   clientAccountName: string;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageOutputModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof FirmClientLinkageOutputModel
     */
   modifiedDate?: Date;
    /**
     * @type {number}
     * @memberof FirmClientLinkageOutputModel
     */
   modifiedUserId?: number;
    /**
     * @type {Enums.FirmClientLinkageStatus}
     * @memberof FirmClientLinkageOutputModel
     */
   status?: Enums.FirmClientLinkageStatus;
    /**
     * @type {boolean}
     * @memberof FirmClientLinkageOutputModel
     */
   isDeleted?: boolean;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   firmContactName: string;
    /**
     * @type {string}
     * @memberof FirmClientLinkageOutputModel
     */
   firmContactEmail: string;
 }