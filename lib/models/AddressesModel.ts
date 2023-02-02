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
 * Information about all the addresses involved in this transaction.
            
For a physical in-person transaction at a retail point-of-sale location, please specify only one address using
the `singleLocation` field.
            
For a transaction that was shipped, delivered, or provided from an origin location such as a warehouse to
a destination location such as a customer, please specify the `shipFrom` and `shipTo` addresses.
            
In the United States, some jurisdictions recognize the address types `pointOfOrderOrigin` and `pointOfOrderAcceptance`.
These address types affect the sourcing models of some transactions.
            
If latitude and longitude information is provided for any of these addresses along with line, city, region, country and postal code information,
we will be using only latitude and longitude and will discard line, city, region, country and postal code information for the transaction.
Please ensure that you have the correct latitude/longitude information for the addresses prior to using the API.
If you provide either latitude or longitude information but not both, we will be using the line, city, region, country and postal code information for the addresses.
 * @export
 * @interface AddressesModel
 */
 export interface AddressesModel {
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   singleLocation?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   shipFrom?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   shipTo?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   pointOfOrderOrigin?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   pointOfOrderAcceptance?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   goodsPlaceOrServiceRendered?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   import?: Models.AddressLocationInfo;
    /**
     * @type {Models.AddressLocationInfo}
     * @memberof AddressesModel
     */
   billTo?: Models.AddressLocationInfo;
 }