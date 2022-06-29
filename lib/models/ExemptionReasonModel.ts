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
 * An exemption reason defines why a certificate allows a customer to be exempt
for purposes of tax calculation.  For a full list of defined exemption reasons,
please call the `ListCertificateExemptionReasons` API.
 * @export
 * @interface ExemptionReasonModel
 */
 export interface ExemptionReasonModel {
    /**
     * @type {number}
     * @memberof ExemptionReasonModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof ExemptionReasonModel
     */
   name: string;
 }