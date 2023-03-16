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
 export enum TaxRuleTypeId {
        RateRule = 0,
        RateOverrideRule = 1,
        BaseRule = 2,
        ExemptEntityRule = 3,
        ProductTaxabilityRule = 4,
        NexusRule = 5,
        RateCapRule = 6,
        TaxOverrideRule = 7,
        FeeRule = 8,
        OtherRule = 100,
}

@JsonConverter
export class TaxRuleTypeIdConverter implements JsonCustomConvert<TaxRuleTypeId> {
    serialize(data: TaxRuleTypeId) {
        return data;
    }
    deserialize(enumType: string): TaxRuleTypeId {
        return TaxRuleTypeId[enumType as keyof typeof TaxRuleTypeId];
    }
}