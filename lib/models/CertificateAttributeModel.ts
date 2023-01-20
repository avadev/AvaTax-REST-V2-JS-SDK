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
 * A certificate attribute can be thought of as a feature or flag that is applied to a certificate.
A single certificate can be linked to zero, one, or many certificate attributes.  The full list of
attributes can be obtained by calling the `ListCertificateAttributes` API.
 * @export
 * @interface CertificateAttributeModel
 */
 export interface CertificateAttributeModel {
    /**
     * @type {number}
     * @memberof CertificateAttributeModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof CertificateAttributeModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof CertificateAttributeModel
     */
   description?: string;
    /**
     * @type {boolean}
     * @memberof CertificateAttributeModel
     */
   isSystemCode?: boolean;
 }