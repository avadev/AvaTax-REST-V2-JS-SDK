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
 * Represents a code describing the intended use for a product that may affect its taxability
 * @export
 * @interface EntityUseCodeModel
 */
 export interface EntityUseCodeModel {
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   code: string;
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   name: string;
    /**
     * @type {string}
     * @memberof EntityUseCodeModel
     */
   description: string;
    /**
     * @type {string[]}
     * @memberof EntityUseCodeModel
     */
   validCountries: string[];
 }