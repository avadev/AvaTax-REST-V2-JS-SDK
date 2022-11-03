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
 * Information about a physical area or zone in which a certificate can apply.
An exposure zone for an exemption certificate will generally be a tax authority such
as a state, country, or local government entity.
 * @export
 * @interface ExposureZoneModel
 */
 export interface ExposureZoneModel {
    /**
     * @type {number}
     * @memberof ExposureZoneModel
     */
   id?: number;
    /**
     * @type {number}
     * @memberof ExposureZoneModel
     */
   companyId?: number;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   tag?: string;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   description?: string;
    /**
     * @type {Date}
     * @memberof ExposureZoneModel
     */
   created?: Date;
    /**
     * @type {Date}
     * @memberof ExposureZoneModel
     */
   modified?: Date;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   region?: string;
    /**
     * @type {string}
     * @memberof ExposureZoneModel
     */
   country?: string;
 }