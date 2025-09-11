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
 export enum CustomRuleSubtype {
        Unknown = 0,
        ProductTaxabilityRule = 1,
        ExemptEntityRule = 2,
        RateOverrideRule = 3,
        BaseOverrideRule = 4,
        Marketplace = 5,
        BundledItemsAllocation = 6,
        MultiplePointsOfUseAllocation = 7,
        FindAndReplaceBeforeCalculation = 8,
        FindAndReplaceAfterCalculation = 9,
        ReportingLocation = 10,
        SellerRemitsAggregator = 11,
        ConsumerUseAllocation = 12,
        FindAndReplaceJurisdictionMatch = 13,
        UpdateField = 14,
        CopyField = 15,
        UpdateAddress = 16,
        CopyAddress = 17,
        UpdateParameter = 18,
        UpdateUserDefinedField = 19,
        UpdateTaxOverride = 20,
        UpdateLocationCode = 21,
        UpdateMarketplace = 22,
        AllocateByField = 23,
        AllocateByAddress = 24,
        AllocateConsumerUse = 25,
        AggregateLines = 26,
        TaxRuleRateOverride = 27,
        TaxRuleBaseOverride = 28,
        TaxRuleProductTaxability = 29,
        TaxRuleExemptEntity = 30,
}

@JsonConverter
export class CustomRuleSubtypeConverter implements JsonCustomConvert<CustomRuleSubtype> {
    serialize(data: CustomRuleSubtype) {
        return data;
    }
    deserialize(enumType: string): CustomRuleSubtype {
        return CustomRuleSubtype[enumType as keyof typeof CustomRuleSubtype];
    }
}