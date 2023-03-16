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

import { JsonConverter, JsonCustomConvert } from "json2typescript";

/**
* @export
* @enum {string}
*/
 export enum FormTypeId {
        SalesAndUse = 0,
        Sales = 1,
        SellersUse = 2,
        Lodging = 3,
        SalesAndLodging = 4,
        ConsumerUse = 5,
        ResortAndRental = 6,
        TouristAndRental = 7,
        Prepayment = 8,
        PrepaymentAllowed = 9,
}

@JsonConverter
export class FormTypeIdConverter implements JsonCustomConvert<FormTypeId> {
    serialize(data: FormTypeId) {
        return data;
    }
    deserialize(enumType: string): FormTypeId {
        return FormTypeId[enumType as keyof typeof FormTypeId];
    }
}