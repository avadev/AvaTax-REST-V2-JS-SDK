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
 * Commit this MultiDocument object so that all transactions within it can be reported on a tax filing.
 * @export
 * @interface CommitMultiDocumentModel
 */
 export interface CommitMultiDocumentModel {
    /**
     * @type {string}
     * @memberof CommitMultiDocumentModel
     */
   code: string;
    /**
     * @type {Enums.DocumentType}
     * @memberof CommitMultiDocumentModel
     */
   type?: Enums.DocumentType;
    /**
     * @type {boolean}
     * @memberof CommitMultiDocumentModel
     */
   commit: boolean;
 }