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
 * Data source object
 * @export
 * @interface DataSourceModel
 */
 export interface DataSourceModel {
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   companyId: number;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   source: string;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   instance: string;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   isEnabled?: boolean;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   isSynced?: boolean;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   isAuthorized?: boolean;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   lastSyncedDate?: Date;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   createdUserId?: number;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   createdDate?: Date;
    /**
     * @type {number}
     * @memberof DataSourceModel
     */
   modifiedUserId?: number;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   modifiedDate?: Date;
    /**
     * @type {Date}
     * @memberof DataSourceModel
     */
   deletedDate?: Date;
    /**
     * @type {boolean}
     * @memberof DataSourceModel
     */
   recalculate?: boolean;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof DataSourceModel
     */
   externalState: string;
 }