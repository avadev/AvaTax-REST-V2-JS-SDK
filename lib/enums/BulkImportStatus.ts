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
 export enum BulkImportStatus {
        None = 0,
        Success = 1,
        Created = 2,
        Updated = 4,
        NotImported = 8,
        Ignored = 16,
        Error = 32,
        ValidationFailed = 64,
        PartialSuccess = 128,
        Invalid = 256,
}

@JsonConverter
export class BulkImportStatusConverter implements JsonCustomConvert<BulkImportStatus> {
    serialize(data: BulkImportStatus) {
        return data;
    }
    deserialize(enumType: string): BulkImportStatus {
        return BulkImportStatus[enumType as keyof typeof BulkImportStatus];
    }
}