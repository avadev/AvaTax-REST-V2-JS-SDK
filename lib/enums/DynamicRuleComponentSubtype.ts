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
 export enum DynamicRuleComponentSubtype {
        Unknown = 0,
        Condition = 1,
        MatchExpression = 2,
        MatchField = 3,
        MatchCustomerCode = 4,
        MatchDocumentType = 5,
        MatchUserDefinedField = 6,
        MatchParameter = 7,
        MatchTaxOverride = 8,
        MatchAddress = 9,
        MatchTariffCode = 10,
        MatchTaxCode = 11,
        MatchTax = 12,
        Action = 256,
        UpdateField = 257,
        CopyField = 258,
        UpdateAddress = 259,
        CopyAddress = 260,
        UpdateParameter = 261,
        UpdateUserDefinedField = 262,
        UpdateTaxOverride = 263,
        UpdateLocationCode = 264,
        UpdateMarketplace = 265,
        AllocateByField = 266,
        AllocateByAddress = 267,
        AllocateConsumerUse = 268,
        AggregateLines = 269,
        TaxRuleRateOverride = 270,
        TaxRuleBaseOverride = 271,
        TaxRuleProductTaxability = 272,
        TaxRuleExemptEntity = 273,
        Variable = 512,
        Expression = 513,
        Aggregation = 514,
}

@JsonConverter
export class DynamicRuleComponentSubtypeConverter implements JsonCustomConvert<DynamicRuleComponentSubtype> {
    serialize(data: DynamicRuleComponentSubtype) {
        return data;
    }
    deserialize(enumType: string): DynamicRuleComponentSubtype {
        return DynamicRuleComponentSubtype[enumType as keyof typeof DynamicRuleComponentSubtype];
    }
}