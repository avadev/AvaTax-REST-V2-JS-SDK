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
 * Marketplace Location Output model
 * @export
 * @interface MarketplaceLocationModel
 */
 export interface MarketplaceLocationModel {
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   country?: string;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   marketplaceId?: string;
    /**
     * @type {string}
     * @memberof MarketplaceLocationModel
     */
   marketplace?: string;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   marketplaceAdoptionDate?: Date;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   marketplaceEndDate?: Date;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   legislativeEffectiveDate?: Date;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   enforcementDate?: Date;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   createdDate?: Date;
    /**
     * @type {Date}
     * @memberof MarketplaceLocationModel
     */
   modifiedDate?: Date;
 }