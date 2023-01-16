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
 * @version    23.1.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

/**
* @export
* @enum {string}
*/
 export enum SecurityRoleId {
        NoAccess = 0,
        SiteAdmin = 1,
        AccountOperator = 2,
        AccountAdmin = 3,
        AccountUser = 4,
        SystemAdmin = 5,
        Registrar = 6,
        CSPTester = 7,
        CSPAdmin = 8,
        SystemOperator = 9,
        TechnicalSupportUser = 10,
        TechnicalSupportAdmin = 11,
        TreasuryUser = 12,
        TreasuryAdmin = 13,
        ComplianceUser = 14,
        ComplianceAdmin = 15,
        ProStoresOperator = 16,
        CompanyUser = 17,
        CompanyAdmin = 18,
        ComplianceTempUser = 19,
        ComplianceRootUser = 20,
        ComplianceOperator = 21,
        SSTAdmin = 22,
        FirmUser = 23,
        FirmAdmin = 24,
        BatchServiceAdmin = 25,
}