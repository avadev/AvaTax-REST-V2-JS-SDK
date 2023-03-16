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
 export enum CompanyAccessLevel {
        None = 0,
        SingleCompany = 1,
        SingleAccount = 2,
        AllCompanies = 3,
        FirmManagedAccounts = 4,
}

@JsonConverter
export class CompanyAccessLevelConverter implements JsonCustomConvert<CompanyAccessLevel> {
    serialize(data: CompanyAccessLevel) {
        return data;
    }
    deserialize(enumType: string): CompanyAccessLevel {
        return CompanyAccessLevel[enumType as keyof typeof CompanyAccessLevel];
    }
}