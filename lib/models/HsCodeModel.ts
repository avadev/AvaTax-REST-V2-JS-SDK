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
 * Describes an element in the harmonized tariff system.
            
According to the [United States International Trade Commission](https://www.usitc.gov), the harmonized tariff schedule is defined as follows:
            
The HTS is a U.S. nomenclature system used to classify traded goods based on their material composition, product name, and/or intended
function. The HTS is designed so that each article falls into only one category. It is divided into chapters, each of which has a 2-digit
number. Each product category within the various chapters is designated by 4, 6, 8, or 10 digits. The 4-digit categories are called
"headings." The 6-, 8- and 10-digit classifications are called "subheadings."
            
Within AvaTax, the `HsCodeModel` object can refer to sections, chapters, headings, subheadings, or articles.  Each object represents one
classification.  Many of these objects have child objects underneath them; these child objects are more specific than their parent objects.
 * @export
 * @interface HsCodeModel
 */
 export interface HsCodeModel {
    /**
     * @type {string}
     * @memberof HsCodeModel
     */
   hsCode: string;
    /**
     * @type {number}
     * @memberof HsCodeModel
     */
   id: number;
    /**
     * @type {number}
     * @memberof HsCodeModel
     */
   parentHsCodeId?: number;
    /**
     * @type {string}
     * @memberof HsCodeModel
     */
   description: string;
    /**
     * @type {string}
     * @memberof HsCodeModel
     */
   system: string;
    /**
     * @type {string}
     * @memberof HsCodeModel
     */
   destinationCountry: string;
    /**
     * @type {Date}
     * @memberof HsCodeModel
     */
   effDate?: Date;
    /**
     * @type {Date}
     * @memberof HsCodeModel
     */
   endDate?: Date;
 }