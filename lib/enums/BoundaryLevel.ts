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
 export enum BoundaryLevel {
        Address = 0,
        Zip9 = 1,
        Zip5 = 2,
}

@JsonConverter
export class BoundaryLevelConverter implements JsonCustomConvert<BoundaryLevel> {
    serialize(data: BoundaryLevel) {
        return data;
    }
    deserialize(enumType: string): BoundaryLevel {
        return BoundaryLevel[enumType as keyof typeof BoundaryLevel];
    }
}