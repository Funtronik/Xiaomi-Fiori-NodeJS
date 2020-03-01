sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "app/model"
], function (Controller,JSONModel,models) {
    "use strict";
    return Controller.extend("app.controller.main", {
        // Global variables
        globalData: null,
        onInit: function () {
        },
        onAfterRendering: function() {
            
        },
        GetTokens: function(){
            console.log('dziala');
            this.getView().getModel().read('/', {
                success: function (oData) {
                    console.log(oData);
                }
            });
        }
    });
});