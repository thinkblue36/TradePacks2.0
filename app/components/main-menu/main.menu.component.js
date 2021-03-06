"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var side_drawer_component_1 = require('../side-drawer/side.drawer.component');
var page_1 = require('ui/page');
var MainMenuComponent = (function () {
    function MainMenuComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-menu',
            template: "   <side-drawer>\n                <StackLayout style=\"width:100%;height:80%;\">\n                    <label text=\"I am the main menu!\" \n                            horizontalAlignment=\"center\" \n                            style=\"color:snow\">\n                    </label>\n                </StackLayout>\n            </side-drawer>\n        ",
            styleUrls: [],
            directives: [side_drawer_component_1.SideDrawer]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4ubWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUMvRCxDQUFDLENBRDZFO0FBQzlFLHNDQUF5QixzQ0FDekIsQ0FBQyxDQUQ4RDtBQUUvRCxxQkFBbUIsU0FFbkIsQ0FBQyxDQUYyQjtBQW1CNUI7SUFFSSwyQkFBcUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBQ3JDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUNKLGdXQVFDO1lBQ0wsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQyxrQ0FBVSxDQUFDO1NBQzNCLENBQUM7O3lCQUFBO0lBYUYsd0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHlCQUFpQixvQkFXN0IsQ0FBQSJ9