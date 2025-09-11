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
 export enum CustomRuleStatus {
        Unknown = 0,
        Active = 1,
        Inactive = 2,
        Expired = 3,
        Future = 4,
}

@JsonConverter
export class CustomRuleStatusConverter implements JsonCustomConvert<CustomRuleStatus> {
    serialize(data: CustomRuleStatus) {
        return data;
    }
    deserialize(enumType: string): CustomRuleStatus {
        return CustomRuleStatus[enumType as keyof typeof CustomRuleStatus];
    }
}