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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Status of an Avalara Managed Returns funding configuration for a company
 * @export
 * @interface FundingStatusModel
 */
 export interface FundingStatusModel {
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   requestId?: number;
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   subledgerProfileID?: number;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   companyID?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   domain?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   recipient?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   sender?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   documentKey?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   documentType?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   documentName?: string;
    /**
     * @type {Models.FundingESignMethodReturn}
     * @memberof FundingStatusModel
     */
   methodReturn?: Models.FundingESignMethodReturn;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   status?: string;
    /**
     * @type {string}
     * @memberof FundingStatusModel
     */
   errorMessage?: string;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   lastPolled?: Date;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   lastSigned?: Date;
    /**
     * @type {Date}
     * @memberof FundingStatusModel
     */
   lastActivated?: Date;
    /**
     * @type {number}
     * @memberof FundingStatusModel
     */
   templateRequestId?: number;
 }