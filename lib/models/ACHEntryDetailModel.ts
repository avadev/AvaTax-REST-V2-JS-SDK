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
 * An edit to be made on a filing calendar.
 * @export
 * @interface ACHEntryDetailModel
 */
 export interface ACHEntryDetailModel {
    /**
     * @type {number}
     * @memberof ACHEntryDetailModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   companyName: string;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   state: string;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   stateRegion: string;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   individualId: string;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   individualName: string;
    /**
     * @type {number}
     * @memberof ACHEntryDetailModel
     */
   amount?: number;
    /**
     * @type {string}
     * @memberof ACHEntryDetailModel
     */
   traceNumber: string;
 }