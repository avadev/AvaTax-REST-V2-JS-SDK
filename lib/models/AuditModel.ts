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
 * Provides detailed information about an API call.
            
The information on this record was captured by AvaTax when your API call was made.  If you are unsure why you
received an error, you can fetch these audit objects and examine the `RequestUrl`, `RequestBody`, and `ErrorMessage`
fields to determine root cause for the error.
 * @export
 * @interface AuditModel
 */
 export interface AuditModel {
    /**
     * @type {number}
     * @memberof AuditModel
     */
   transactionId?: number;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   accountId?: number;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   userId?: number;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   ipAddress?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   machineName?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   clientName?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   clientVersion?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   adapterName?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   adapterVersion?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   serverName?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   serverVersion?: string;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   referenceId?: number;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   severityLevelId?: number;
    /**
     * @type {Date}
     * @memberof AuditModel
     */
   serverTimestamp?: Date;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   serverDuration?: number;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   serviceName?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   operation?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   referenceCode?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   errorMessage?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   auditMessage?: string;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   loadBalancerDuration?: number;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   recordCount?: number;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   referenceAuthorization?: string;
    /**
     * @type {boolean}
     * @memberof AuditModel
     */
   isQueued?: boolean;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   databaseCallCount?: number;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   databaseCallDuration?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   remoteCallDuration?: string;
    /**
     * @type {Models.AuditEvent[]}
     * @memberof AuditModel
     */
   events?: Models.AuditEvent[];
    /**
     * @type {string}
     * @memberof AuditModel
     */
   requestUrl?: string;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   requestBody?: string;
    /**
     * @type {number}
     * @memberof AuditModel
     */
   responseStatus?: number;
    /**
     * @type {string}
     * @memberof AuditModel
     */
   responseBody?: string;
    /**
     * @type {Models.AuditModel[]}
     * @memberof AuditModel
     */
   remoteCalls?: Models.AuditModel[];
 }