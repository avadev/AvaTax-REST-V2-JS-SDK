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
 export enum Visibility {
        Required = 0,
        Recommended = 1,
        Optional = 2,
        Conditional = 3,
}

@JsonConverter
export class VisibilityConverter implements JsonCustomConvert<Visibility> {
    serialize(data: Visibility) {
        return data;
    }
    deserialize(enumType: string): Visibility {
        return Visibility[enumType as keyof typeof Visibility];
    }
}