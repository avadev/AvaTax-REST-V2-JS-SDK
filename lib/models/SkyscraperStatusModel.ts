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
 * @version    23.2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Represents a list of statuses of returns available in skyscraper
 * @export
 * @interface SkyscraperStatusModel
 */
 export interface SkyscraperStatusModel {
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   name?: string;
    /**
     * @type {string[]}
     * @memberof SkyscraperStatusModel
     */
   taxFormCodes?: string[];
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   country?: string;
    /**
     * @type {Enums.ScraperType}
     * @memberof SkyscraperStatusModel
     */
   scraperType?: Enums.ScraperType;
    /**
     * @type {boolean}
     * @memberof SkyscraperStatusModel
     */
   isAvailable?: boolean;
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   expectedResponseTime?: string;
    /**
     * @type {string}
     * @memberof SkyscraperStatusModel
     */
   message?: string;
    /**
     * @type {Models.requiredFilingCalendarDataFieldModel[]}
     * @memberof SkyscraperStatusModel
     */
   requiredFilingCalendarDataFields?: Models.requiredFilingCalendarDataFieldModel[];
 }