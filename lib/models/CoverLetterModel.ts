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
 * @version    22.7.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * The CoverLetter model represents a message sent along with an invitation to use CertExpress to
upload certificates.  An invitation allows customers to use CertExpress to upload their exemption
certificates directly; this cover letter explains why the invitation was sent.
 * @export
 * @interface CoverLetterModel
 */
 export interface CoverLetterModel {
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   title: string;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   subject: string;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   description: string;
    /**
     * @type {Date}
     * @memberof CoverLetterModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof CoverLetterModel
     */
   modifiedDate?: Date;
    /**
     * @type {boolean}
     * @memberof CoverLetterModel
     */
   active?: boolean;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   pageCount?: number;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   templateFilename: string;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   version?: number;
 }