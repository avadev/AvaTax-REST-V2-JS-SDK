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
 export enum FilingStatusId {
        PendingApproval = 0,
        Dirty = 1,
        ApprovedToFile = 2,
        PendingFiling = 3,
        PendingFilingOnBehalf = 4,
        Filed = 5,
        FiledOnBehalf = 6,
        ReturnAccepted = 7,
        ReturnAcceptedOnBehalf = 8,
        PaymentRemitted = 9,
        Voided = 10,
        PendingReturn = 11,
        PendingReturnOnBehalf = 12,
        DoNotFile = 13,
        ReturnRejected = 14,
        ReturnRejectedOnBehalf = 15,
        ApprovedToFileOnBehalf = 16,
        FiledByCustomer = 17,
}