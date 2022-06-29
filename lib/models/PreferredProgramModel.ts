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
 * A preferred program is a customs and/or duty program that can be used to handle cross-border transactions.
Customers who sign up for a preferred program may obtain better terms for their customs and duty payments.
            
To indicate that your company has signed up for a preferred program, specify the `code` value from this
object as the value for the `AvaTax.LC.PreferredProgram` parameter in your transaction.
 * @export
 * @interface PreferredProgramModel
 */
 export interface PreferredProgramModel {
    /**
     * @type {number}
     * @memberof PreferredProgramModel
     */
   id?: number;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   originCountry: string;
    /**
     * @type {string}
     * @memberof PreferredProgramModel
     */
   destinationCountry: string;
    /**
     * @type {Date}
     * @memberof PreferredProgramModel
     */
   effectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof PreferredProgramModel
     */
   endDate?: Date;
 }