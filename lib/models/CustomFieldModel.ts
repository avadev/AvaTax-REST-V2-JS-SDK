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
 * @version    22.10.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * A custom field provides extra information about a customer or certificate.
            
Custom fields are provided to permit you to store additional information about an exemption certificate or customer.  They are available to
support additional use cases beyond that supported directly by Avalara's exemption certificate software.
            
For more information about custom fields, see the [Avalara Help Center article about custom fields](https://help.avalara.com/0021_Avalara_CertCapture/All_About_CertCapture/Edit_or_Remove_Details_about_Customers).
 * @export
 * @interface CustomFieldModel
 */
 export interface CustomFieldModel {
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   name?: string;
    /**
     * @type {string}
     * @memberof CustomFieldModel
     */
   value?: string;
 }