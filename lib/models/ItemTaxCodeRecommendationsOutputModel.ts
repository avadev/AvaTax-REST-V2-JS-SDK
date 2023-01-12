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
 * Represents item tax code recommendations model
 * @export
 * @interface ItemTaxCodeRecommendationsOutputModel
 */
 export interface ItemTaxCodeRecommendationsOutputModel {
    /**
     * @type {string}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   itemCode?: string;
    /**
     * @type {Models.ItemTaxCodeModel[]}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   recommendations: Models.ItemTaxCodeModel[];
    /**
     * @type {string}
     * @memberof ItemTaxCodeRecommendationsOutputModel
     */
   url?: string;
 }