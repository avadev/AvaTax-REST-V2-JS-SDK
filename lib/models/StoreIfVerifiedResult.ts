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
 * The Result of a call to the /ageVerification/store/identity/storeIfVerified endpoint.
 * @export
 * @interface StoreIfVerifiedResult
 */
 export interface StoreIfVerifiedResult {
    /**
     * @type {boolean}
     * @memberof StoreIfVerifiedResult
     */
   isOfAge?: boolean;
    /**
     * @type {Enums.AgeVerifyFailureCode[]}
     * @memberof StoreIfVerifiedResult
     */
   failureCodes: Enums.AgeVerifyFailureCode[];
    /**
     * @type {boolean}
     * @memberof StoreIfVerifiedResult
     */
   fromStore?: boolean;
    /**
     * @type {string}
     * @memberof StoreIfVerifiedResult
     */
   createdUtc?: string;
 }