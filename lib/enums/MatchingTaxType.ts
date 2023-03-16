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
 export enum MatchingTaxType {
        E = 5,
        Lodging = 6,
        Bottle = 7,
        RentToOwn = 8,
        BikeTax = 11,
        LandedCost = 12,
        CheckoutBag = 13,
        Alcohol = 17,
        Amusement = 20,
        Hospitality = 21,
        RentalLeasing = 23,
        GrossReceipts = 24,
        Mattress = 25,
        Lumber = 27,
        Paint = 28,
        Tires = 29,
        EI = 30,
        All = 65,
        BothSalesAndUseTax = 66,
        ConsumerUseTax = 67,
        ConsumersUseAndSellersUseTax = 68,
        ConsumerUseAndSalesTax = 69,
        Fee = 70,
        VATInputTax = 73,
        LightBulbs = 76,
        Meals = 77,
        VATNonrecoverableInputTax = 78,
        VATOutputTax = 79,
        PIF = 80,
        Rental = 82,
        SalesTax = 83,
        UseTax = 85,
        EWaste = 87,
        Batteries = 90,
}

@JsonConverter
export class MatchingTaxTypeConverter implements JsonCustomConvert<MatchingTaxType> {
    serialize(data: MatchingTaxType) {
        return data;
    }
    deserialize(enumType: string): MatchingTaxType {
        return MatchingTaxType[enumType as keyof typeof MatchingTaxType];
    }
}