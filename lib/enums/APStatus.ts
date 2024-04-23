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
 export enum APStatus {
        PayAsBilledMatch = 0,
        ShortPayItemsAccrueMatch = 1,
        MarkForReviewMatch = 2,
        RejectMatch = 3,
        PayAsBilledNoAccrual = 4,
        PayAsBilledAccrueUndercharge = 5,
        ShortPayItemsAccrueUndercharge = 6,
        MarkForReviewUndercharge = 7,
        RejectUndercharge = 8,
        PayAsBilledOvercharge = 9,
        ShortPayAvalaraCalculated = 10,
        ShortPayItemsAccrueOvercharge = 11,
        MarkForReviewOvercharge = 12,
        RejectOvercharge = 13,
        AmountThresholdNotMet = 14,
        CostCenterExempted = 15,
        ItemExempted = 16,
        TrustedVendor = 17,
        AccruedByVendor = 18,
        Ignored = 19,
}

@JsonConverter
export class APStatusConverter implements JsonCustomConvert<APStatus> {
    serialize(data: APStatus) {
        return data;
    }
    deserialize(enumType: string): APStatus {
        return APStatus[enumType as keyof typeof APStatus];
    }
}