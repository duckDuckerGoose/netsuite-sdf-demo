/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record'],

function(record) {

    function afterSubmit(context) {
        var account = context.newRecord;
        var accountConfig = account.getValue('custrecord_erp_dont_set_external_auto');
        if (!accountConfig) {
            var accountNumber = account.getValue('acctnumber');
            record.submitFields({
                type: account.type,
                id: account.id,
                values: {
                    externalid: accountNumber
                },
                options: {
                    enableSourcing: false,
                    ignoreMandatoryFields : true
                }
            });
        }
    }

    return {
        afterSubmit: afterSubmit
    };
    
});
