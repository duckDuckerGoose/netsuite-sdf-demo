/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record'],

function(record) {

    function afterSubmit(context) {
        var account = context.newRecord;
        // get value of 'DO NOT SET EXTERNAL ID TO NUMBER' checkbox
        var accountConfig = account.getValue('custrecord_erp_dont_set_external_auto');
        // if the checkbox is not checked, proceed with setting the external id
        if (!accountConfig) {
            // get the account number
            var accountNumber = account.getValue('acctnumber');
            // set the external id using the account number
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
