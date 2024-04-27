/*global QUnit*/

sap.ui.define([
	"ns/dynamicpagedemo/controller/DynamicPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DynamicPage Controller");

	QUnit.test("I should test the DynamicPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
