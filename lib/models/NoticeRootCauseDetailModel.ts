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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * NoticeRootCause Model
 * @export
 * @interface NoticeRootCauseDetailModel
 */
 export interface NoticeRootCauseDetailModel {
    /**
     * @type {number}
     * @memberof NoticeRootCauseDetailModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof NoticeRootCauseDetailModel
     */
   noticeId: number;
    /**
     * @type {number}
     * @memberof NoticeRootCauseDetailModel
     */
   taxNoticeRootCauseId: number;
    /**
     * @type {string}
     * @memberof NoticeRootCauseDetailModel
     */
   description?: string;
 }