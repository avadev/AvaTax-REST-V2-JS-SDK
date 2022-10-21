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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Information about a previously created MultiDocument transaction
 * @export
 * @interface AuditMultiDocumentModel
 */
 export interface AuditMultiDocumentModel {
    /**
     * @type {Models.ReconstructedMultiDocumentModel}
     * @memberof AuditMultiDocumentModel
     */
   reconstructed: Models.ReconstructedMultiDocumentModel;
    /**
     * @type {string}
     * @memberof AuditMultiDocumentModel
     */
   code: string;
    /**
     * @type {Enums.DocumentType}
     * @memberof AuditMultiDocumentModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {Date}
     * @memberof AuditMultiDocumentModel
     */
   serverTimestamp?: Date;
    /**
     * @type {Date}
     * @memberof AuditMultiDocumentModel
     */
   serverDuration?: Date;
    /**
     * @type {Enums.ApiCallStatus}
     * @memberof AuditMultiDocumentModel
     */
   apiCallStatus?: Enums.ApiCallStatus;
    /**
     * @type {Models.OriginalApiRequestResponseModel}
     * @memberof AuditMultiDocumentModel
     */
   original: Models.OriginalApiRequestResponseModel;
 }