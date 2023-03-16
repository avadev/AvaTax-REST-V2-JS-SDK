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
 export enum AccrualType {
        Filing = 1,
        Accrual = 2,
}

@JsonConverter
export class AccrualTypeConverter implements JsonCustomConvert<AccrualType> {
    serialize(data: AccrualType) {
        return data;
    }
    deserialize(enumType: string): AccrualType {
        return AccrualType[enumType as keyof typeof AccrualType];
    }
}