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
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { AddressLocationInfo } from "./AddressLocationInfo";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Information about all the addresses involved in this transaction.
            
For a physical in-person transaction at a retail point-of-sale location, please specify only one address using
the `singleLocation` field.
            
For a transaction that was shipped, delivered, or provided from an origin location such as a warehouse to
a destination location such as a customer, please specify the `shipFrom` and `shipTo` addresses.
            
In the United States, some jurisdictions recognize the address types `pointOfOrderOrigin` and `pointOfOrderAcceptance`.
These address types affect the sourcing models of some transactions.

VAT transactions support a `goodsPlaceOrServiceRendered` address, which indicates where goods are located or where services 
are rendered. VAT transactions also support an `import` address, which specifies the address of the buyer importing a good 
from another country.

India GST transactions support a `billTo` address, which specifies where invoices and other billing-related information are sent to the buyer.
            
If latitude and longitude information is provided for any of these addresses along with line, city, region, country and postal code information,
we will be using only latitude and longitude and will discard line, city, region, country and postal code information for the transaction.
Please ensure that you have the correct latitude/longitude information for the addresses prior to using the API.
If you provide either latitude or longitude information but not both, we will be using the line, city, region, country and postal code information for the addresses.
 * @export
 * @class AddressesModel
 */
 @JsonObject("AddressesModel")
 export class AddressesModel {
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("singleLocation", AddressLocationInfo, true)
   singleLocation?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("shipFrom", AddressLocationInfo, true)
   shipFrom?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("shipTo", AddressLocationInfo, true)
   shipTo?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("pointOfOrderOrigin", AddressLocationInfo, true)
   pointOfOrderOrigin?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("pointOfOrderAcceptance", AddressLocationInfo, true)
   pointOfOrderAcceptance?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("goodsPlaceOrServiceRendered", AddressLocationInfo, true)
   goodsPlaceOrServiceRendered?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("import", AddressLocationInfo, true)
   import?: AddressLocationInfo | undefined = undefined;
    /**
     * @type {AddressLocationInfo}
     * @memberof AddressesModel
     */
   @JsonProperty("billTo", AddressLocationInfo, true)
   billTo?: AddressLocationInfo | undefined = undefined;
 }