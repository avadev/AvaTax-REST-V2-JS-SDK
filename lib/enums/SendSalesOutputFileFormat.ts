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
 export enum SendSalesOutputFileFormat {
        STANDARD = 1,
        DMA = 2,
        DMA_NEW = 3,
}

@JsonConverter
export class SendSalesOutputFileFormatConverter implements JsonCustomConvert<SendSalesOutputFileFormat> {
    serialize(data: SendSalesOutputFileFormat) {
        return data;
    }
    deserialize(enumType: string): SendSalesOutputFileFormat {
        return SendSalesOutputFileFormat[enumType as keyof typeof SendSalesOutputFileFormat];
    }
}