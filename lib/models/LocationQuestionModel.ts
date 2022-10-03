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
 * @version    22.9.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Information about questions that the local jurisdictions require for each location
 * @export
 * @interface LocationQuestionModel
 */
 export interface LocationQuestionModel {
    /**
     * @type {number}
     * @memberof LocationQuestionModel
     */
   id: number;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   question: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   regularExpression: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   exampleValue: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   jurisdictionName: string;
    /**
     * @type {Enums.JurisdictionType}
     * @memberof LocationQuestionModel
     */
   jurisdictionType?: Enums.JurisdictionType;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   jurisdictionCountry: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   jurisdictionRegion: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   helpText: string;
    /**
     * @type {number}
     * @memberof LocationQuestionModel
     */
   maxLength?: number;
    /**
     * @type {boolean}
     * @memberof LocationQuestionModel
     */
   required?: boolean;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   dataType: string;
    /**
     * @type {string}
     * @memberof LocationQuestionModel
     */
   staticOptions: string;
    /**
     * @type {boolean}
     * @memberof LocationQuestionModel
     */
   unique?: boolean;
 }